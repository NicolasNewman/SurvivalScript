import { store } from '../../index';
import { log, clearOutput } from '../../actions/output';
import { clearCode } from '../../actions/code';
import { addLevel } from '../../actions/api';

/**
 * Gets the code in the code panel
 */
export const getCodeWrapper = () => {
    return store.getState().code.code;
};

/**
 * Clears the code in the code panel
 */
export const clearCodeWrapper = () => {
    return store.dispatch(clearCode());
};

/**
 * Writes a new line to the output panel
 * @param {string} text - the text to log to the output
 */
export const logOutputWrapper = (text: string) => {
    return store.dispatch(log(text));
};

/**
 * Clears all text in the output panel
 */
export const clearOutputWrapper = () => {
    return store.dispatch(clearOutput());
};

/**
 * Unlocks the next level in the API tree
 */
export const addLevel = () => {
    return store.dispatch(addLevel());
};
