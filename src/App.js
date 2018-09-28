import React, { Component } from 'react';
import './App.css';
import Flag, { countries } from './components/Flag';

const urlParams = new URLSearchParams(window.location.search);

const filteredCountries = urlParams.has('countries') ? urlParams.get('countries').split(',') : countries;

if(urlParams.has('square')) {
  document.documentElement.style.setProperty('--height', urlParams.has('square') ? 'var(--width)' : 'auto')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {countries.filter(name => filteredCountries.indexOf(name) > -1).map(name => (
          <div className="flag">
            <Flag key={name} country={name} />
            <strong>{name}</strong>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
