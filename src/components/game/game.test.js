import React from 'react';
import renderer from 'react-test-renderer';
import Game from './index'
import {render, fireEvent, screen} from '@testing-library/react'
import { RollEngine } from '../roll_engine';

const test_seed = 77;

//First few rounds of seed 77 as follows:
//player win
//player win
//player win
//computer win
//computer win
//computer win
//computer win
//computer win
//computer win
//computer win
//draw
//player win

it('renders a new game correctly', () => {

    let rollEngine = new RollEngine(test_seed);

    const tree = renderer
        .create(<Game rollEngine={rollEngine}></Game>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

async function rollAndCheckResult(text) {
    fireEvent.click(screen.getByTestId("rollButton"))
    const items = await screen.findAllByText(text)
    expect(items).toHaveLength(1)
}

it('plays rounds correctly', async () => {

    let rollEngine = new RollEngine(test_seed);
    render(<Game rollEngine={rollEngine}></Game>)
    await rollAndCheckResult("Player Wins!!!")
    await rollAndCheckResult("Player Wins!!!")
    await rollAndCheckResult("Player Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Computer Wins!!!")
    await rollAndCheckResult("Draw!!!")
})

it('resets the game correctly', async () => { 

    let rollEngine = new RollEngine(test_seed);
    render(<Game  rollEngine={rollEngine}></Game>)

    //Play 1 round then reset
    await rollAndCheckResult("Player Wins!!!")
    fireEvent.click(screen.getByTestId("resetButton"))
    const items = await screen.findAllByText("Let's Play!")
    expect(items).toHaveLength(1)
})