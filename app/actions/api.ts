import { string } from 'prop-types';

export enum ApiTypeKeys {
    ADD_LEVEL = 'ADD_LEVEL',
    DEBUG = 'DEBUG'
}

interface AddLevelAction {
    type: ApiTypeKeys.ADD_LEVEL;
}

export function addLevel() {
    return {
        type: ApiTypeKeys.ADD_LEVEL
    };
}

interface DebugAction {
    type: ApiTypeKeys.DEBUG;
    indexes: Array<number>;
}

export function debug(indexes: Array<number>) {
    return {
        type: ApiTypeKeys.DEBUG,
        indexes
    };
}

export type ApiTypes = AddLevelAction | DebugAction;
export default { addLevel, debug };
