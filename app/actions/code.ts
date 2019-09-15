import { string } from 'prop-types';

export enum CodeTypeKeys {
    SET_CODE = 'SET_CODE',
    CLEAR_CODE = 'CLEAR_CODE'
}

interface CodeAction {
    type: CodeTypeKeys.SET_CODE;
    code: string;
}

interface ClearAction {
    type: CodeTypeKeys.CLEAR_CODE;
}

export type CodeTypes = CodeAction | ClearAction;

/**
 * Signals the store to grab the text currently in the code input and store it
 * @param {string} code - code to be stored
 */
export function setCode(code: string) {
    return {
        type: CodeTypeKeys.SET_CODE,
        code
    };
}

/**
 * Clears all code text cached in the store
 */
export function clearCode() {
    return {
        type: CodeTypeKeys.CLEAR_CODE
    };
}

export default { setCode, clearCode };
