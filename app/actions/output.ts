import { string } from 'prop-types';

export enum OutputTypeKeys {
    LOG_OUTPUT = 'LOG_OUTPUT',
    CLEAR_OUTPUT = 'CLEAR_OUTPUT'
}

interface LogAction {
    type: OutputTypeKeys.LOG_OUTPUT;
    text: string;
}

interface ClearAction {
    type: OutputTypeKeys.CLEAR_OUTPUT;
}

export type OutputTypes = LogAction | ClearAction;

/**
 * Signals for information to be logged to the output component
 * @param {string} text - text to be logged to the screen;
 */
export function log(text: string) {
    return {
        type: OutputTypeKeys.LOG_OUTPUT,
        text
    };
}

/**
 * Clears all output text cached in the store
 */
export function clearOutput() {
    return {
        type: OutputTypeKeys.CLEAR_OUTPUT
    };
}

export default { log, clearOutput };
