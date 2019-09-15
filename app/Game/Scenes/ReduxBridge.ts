import { store } from '../../index';
import { log, clearOutput } from '../../actions/output';
import { clearCode } from '../../actions/code';

/**
 * Gets the code in the code panel
 */
export const getCodeWrapper = (): string => {
    return store.getState().code.code;
};

/**
 * Clears the code in the code panel
 */
export const clearCodeWrapper = (): void => {
    return store.dispatch(clearCode());
};

/**
 * Writes a new line to the output panel
 * @param {string} text - the text to log to the output
 */
export const logOutputWrapper = (text: string): void => {
    return store.dispatch(log(text));
};

/**
 * Clears all text in the output panel
 */
export const clearOutputWrapper = (): void => {
    return store.dispatch(clearOutput());
};
