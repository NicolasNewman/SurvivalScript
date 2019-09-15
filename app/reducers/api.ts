import { ApiTypeKeys, ApiTypes } from '../actions/api';
import LevelText from '../constants/api-levels';

export interface IApiState {
    levels = Array<String>;
    text = String;
}

const initialState: IApiState = {
    levels = [...LevelText],
    text = ''
};

export default function output(
    state: IApiState = initialState,
    action: OutputTypes
) {
    switch (action.type) {
        case OutputTypeKeys.LOG_OUTPUT:
            const formatText = '> ' + action.text;
            // const arr = state.allText[state.allText.length - 1].includes('>')
            //     ? state.allText.pop()
            //     : state.allText;
            return {
                allText: [...state.allText, formatText, '> ']
            };
        default:
            return state;
    }
}
