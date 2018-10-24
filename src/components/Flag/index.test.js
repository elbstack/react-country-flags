import React from 'react';
import renderer from 'react-test-renderer';
import Flag from './';

const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));
[true, false].forEach(asSquare => {
  it(`renders without crashing and asSquare ${asSquare}`, async () => {
    const component = renderer.create(<Flag country={'de'} asSquare={asSquare} />);

    await sleep(300);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const component2 = renderer.create(<Flag country={'us'} asSquare={asSquare} />);

    await sleep(300);

    const tree2 = component2.toJSON();
    expect(tree2).toMatchSnapshot();
  });
});
