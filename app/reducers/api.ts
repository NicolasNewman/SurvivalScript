import { ApiTypeKeys, ApiTypes } from '../actions/api';
import { LevelList } from '../constants/api-levels';

export interface IApiState {
    levels: Array<String>;
    levelIndex: number;
    text: String;
}

const initialState: IApiState = {
    levels: [...LevelList],
    levelIndex: 0,
    text: ''
};

export default function output(
    state: IApiState = initialState,
    action: ApiTypes
) {
    switch (action.type) {
        case ApiTypeKeys.ADD_LEVEL:
            let newText = '';
            const indx = state.levelIndex + 1;
            for (let i = 0; i < state.levelIndex; i++) {
                newText += state.levels[i];
            }
            return {
                levels: state.levels,
                levelIndex: indx,
                text: newText
            };
        case ApiTypeKeys.DEBUG:
            let text = '';
            for (let i = 0; i < state.levels.length; i++) {
                for (let j = 0; j < action.indexes.length; j++) {
                    if (action.indexes[j] === i) {
                        newText += state.levels[i];
                    }
                }
            }
            return {};
        default:
            return state;
    }
}
