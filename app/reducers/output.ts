import { OutputTypeKeys, OutputTypes } from '../actions/output';

export interface IOutputState {
    allText: Array<string>;
}

const initialState: IOutputState = {
    allText: []
};

export default function output(
    state: IOutputState = initialState,
    action: OutputTypes
) {
    switch (action.type) {
        case OutputTypeKeys.LOG_OUTPUT:
            // Pop the last prompt from the string if there is already one
            state.allText[state.allText.length - 1] === '> '
                ? state.allText.pop()
                : null;
            // Add a new prompt to the end of the string to add
            const formatText = '> ' + action.text;
            return {
                allText: [...state.allText, formatText, '> ']
            };
        case OutputTypeKeys.CLEAR_OUTPUT:
            return {
                allText: []
            };
        default:
            return state;
    }
}
