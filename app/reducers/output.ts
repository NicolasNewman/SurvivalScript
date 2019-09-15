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
            const formatText = '> ' + action.text;
            // const arr = state.allText[state.allText.length - 1].includes('>')
            //     ? state.allText.pop()
            //     : state.allText;
            return {
                allText: [...this.state.allText, formatText, '> ']
            };
        default:
            return state;
    }
}
