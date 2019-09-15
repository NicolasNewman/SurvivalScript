import { ApiTypeKeys, ApiTypes } from '../actions/api';
import { LevelList } from '../constants/api-levels';

export interface IApiState {
    levels: Array<string>;
    levelIndex: number;
    text: string;
}

const initialState: IApiState = {
    levels: [...LevelList],
    levelIndex: 0,
    text: ''
};

export default function api(state: IApiState = initialState, action: ApiTypes) {
    switch (action.type) {
        case ApiTypeKeys.ADD_LEVEL:
            let newText = '';
            const indx = state.levelIndex + 1;
            for (let i = 0; i <= indx && i < state.levels.length; i++) {
                newText += state.levels[i];
            }
            return {
                levels: state.levels,
                levelIndex: indx,
                text: newText
            };
        case ApiTypeKeys.LOAD_LEVELS:
            let newText3 = '';
            for (
                let i = 0;
                i <= state.levelIndex && i < state.levels.length;
                i++
            ) {
                newText3 += state.levels[i];
            }
            return {
                levels: state.levels,
                levelIndex: state.levelIndex,
                text: newText3
            };
        case ApiTypeKeys.DEBUG:
            let newText2 = '';
            for (let i = 0; i < state.levels.length; i++) {
                for (let j = 0; j < action.indexes.length; j++) {
                    if (action.indexes[j] === i) {
                        newText2 += state.levels[i];
                    }
                }
            }
            return {
                levels: state.levels,
                levelIndex: state.levelIndex,
                text: newText2
            };
        default:
            return state;
    }
}
