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
            state.allText[state.allText.length - 1] === '> '
                ? state.allText.pop()
                : null;
            const formatText = '> ' + action.text;
            return {
                allText: [...state.allText, formatText, '> ']
            };
        default:
            return state;
    }
}
