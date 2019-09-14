import { GameTypeKeys, GameTypes } from '../actions/game';
// import * as Phaser from 'phaser';

const initialState = {
    initialize: false,
    game: {
        width: '100%',
        height: '100%',
        // type: Phaser.AUTO,
        scene: {}
    }
};

export default function game(state = initialState, action: GameTypes) {
    switch (action.type) {
        case GameTypeKeys.INCREMENT_COUNTER:
            return state;
        default:
            return state;
    }
}
