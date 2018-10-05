import React, { Component } from 'react';
import './App.css';
import Flag, { countries } from './components/Flag';
import { Link, Redirect, Router } from '@reach/router';

const urlParams = new URLSearchParams(window.location.search);

document.documentElement.style.setProperty('--height', urlParams.has('square') ? 'var(--width)' : 'auto');
const asSquare = urlParams.has('square');

const getLink  = (index) => {
  const name = countries[index];
  return <Link to={`/flag/${name}`}>{name}</Link>;
}

const getBackLink = name => {
  let index = countries.indexOf(name) - 1;
  if (index < 0) {
    index = countries.length - 1;
  }
  return getLink(index);
};

const getForwardLink = name => {
  let index = countries.indexOf(name) + 1;
  if (index >= countries.length) {
    index = 0;
  }
  return getLink(index);
};

const Home = () => (
  <div className="App">
    {countries.map(name => (
      <Link key={name} className="flag" to={`/flag/${name}`}>
        <Flag key={name} asSquare country={name} />
        <strong>{name}</strong>
      </Link>
    ))}
  </div>
);

const FlagePage = ({ name }) =>
  countries.indexOf(name) === -1 ? (
    <Redirect to="/" noThrow />
  ) : (
    <div className="single">
      <Link to={'/'}>back</Link>
      <Flag className="single-flag" asSquare={asSquare} country={name} />
      <strong className="single-title">{name}</strong>

      <span className="single-link forward">{getForwardLink(name)}</span>
      <span className="single-link back">{getBackLink(name)}</span>
    </div>
  );

class App extends Component {
  render() {
    return (
      <Router>
        <FlagePage path="/flag/:name" />
        <Home path="/" />
      </Router>
    );
  }
}

export default App;
