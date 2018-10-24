import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './FlagMn';

it('FlagMn renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
