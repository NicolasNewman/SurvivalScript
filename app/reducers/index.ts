import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import output from './output';
import api from './api';
import code from './code';
import { History } from 'history';

export default function createRootReducer(history: History) {
    return combineReducers({
        router: connectRouter(history),
        output,
        api,
        code
    });
}
