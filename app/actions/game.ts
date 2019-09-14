export enum GameTypeKeys {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER'
}

interface IncrementAction {
    type: GameTypeKeys.INCREMENT_COUNTER;
}

export type GameTypes = IncrementAction;

export function increment() {
    return {
        type: GameTypeKeys.INCREMENT_COUNTER
    };
}

export default { increment };
