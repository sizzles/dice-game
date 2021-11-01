import React from 'react';
import renderer from 'react-test-renderer';
import Game from './index'

it('renders a new game correctly', () => {
    const tree = renderer
        .create(<Game></Game>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})