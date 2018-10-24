import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './FlagLi';

it('FlagLi renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
