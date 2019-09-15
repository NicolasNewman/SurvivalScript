import { string } from 'prop-types';

export enum OutputTypeKeys {
    LOG_OUTPUT = 'LOG_OUTPUT'
}

interface LogAction {
    type: OutputTypeKeys.LOG_OUTPUT;
    text: string;
}

export type OutputTypes = LogAction;

export function log(text: string) {
    return {
        type: OutputTypeKeys.LOG_OUTPUT,
        text
    };
}

export default { log };