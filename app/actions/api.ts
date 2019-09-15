import { string } from 'prop-types';

export enum ApiTypeKeys {
    LOG_API = 'LOG_API'
}

interface LogAction {
    type: ApiTypeKeys.LOG_API;
    text: string;
}

export type ApiTypes = LogAction;

export function log(text: string) {
    return {
        type: ApiTypeKeys.LOG_API,
        text
    };
}

export default { log };
