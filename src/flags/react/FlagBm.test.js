import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './FlagBm';

it('FlagBm renders without crashing', () => {
  const component = renderer.create(<Flag />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
