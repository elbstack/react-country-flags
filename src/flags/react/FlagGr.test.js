import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './FlagGr';

it('FlagGr renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
