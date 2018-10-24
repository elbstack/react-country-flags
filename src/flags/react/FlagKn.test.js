import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './FlagKn';

it('FlagKn renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
