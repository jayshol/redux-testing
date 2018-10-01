import reducer from './reducer';
import {restartGame, makeGuess} from './actions';

it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.auralStatus).toEqual('');
});

it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
});

describe('restartGame', () => {
        it('Should start a new game', () => {
            // Mess up the state a bit to simulate an existing game
            let state = {
                guesses: [1, 2, 3, 4],
                feedback: 'Awesome',
                correctAnswer: 4
            };
            const correctAnswer = 10;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
        });
    });