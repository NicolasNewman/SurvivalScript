import { CodeTypeKeys, CodeTypes } from '../actions/code';

export interface ICodeState {
    code: string;
}

const initialState: ICodeState = {
    code: ''
};

export default function output(
    state: ICodeState = initialState,
    action: CodeTypes
) {
    switch (action.type) {
        case CodeTypeKeys.SET_CODE:
            return {
                code: action.code
            };
        default:
            return state;
    }
}
