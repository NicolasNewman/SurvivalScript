import { string } from 'prop-types';

export enum ApiTypeKeys {
    ADD_LEVEL = 'ADD_LEVEL',
    LOAD_LEVELS = 'LOAD_LEVELS',
    DEBUG = 'DEBUG'
}

interface AddLevelAction {
    type: ApiTypeKeys.ADD_LEVEL;
}

interface LoadLevelAction {
    type: ApiTypeKeys.LOAD_LEVELS;
}

interface DebugAction {
    type: ApiTypeKeys.DEBUG;
    indexes: Array<number>;
}

/**
 * Adds another level to the API component. This is based off an intenral index that is incremented each call.
 * For debugging, see debug.
 */
export function addLevel() {
    return {
        type: ApiTypeKeys.ADD_LEVEL
    };
}

export function loadLevels() {
    return {
        type: ApiTypeKeys.LOAD_LEVELS
    };
}

/**
 * Automatically unlocks certain levels for debugging purposes.
 * @param {Array<number>} indexes - the indexes, starting from 0, of the levels to unlock
 */
export function debug(indexes: Array<number>) {
    return {
        type: ApiTypeKeys.DEBUG,
        indexes
    };
}

export type ApiTypes = AddLevelAction | LoadLevelAction | DebugAction;
export default { addLevel, loadLevels, debug };
