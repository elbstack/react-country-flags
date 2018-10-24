import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './FlagSh';

it('FlagSh renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
