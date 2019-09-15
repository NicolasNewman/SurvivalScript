import { string } from 'prop-types';

export enum CodeTypeKeys {
    SET_CODE = 'SET_CODE'
}

interface CodeAction {
    type: CodeTypeKeys.SET_CODE;
    code: string;
}

export type CodeTypes = CodeAction;

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

export default { setCode };
