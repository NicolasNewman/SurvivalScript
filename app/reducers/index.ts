import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from './game';
import { History } from 'history';

export default function createRootReducer(history: History) {
    return combineReducers({
        router: connectRouter(history),
        game
    });
}
