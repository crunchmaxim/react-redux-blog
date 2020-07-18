import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import usersReducer from './reducers/usersReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';

const reducers = combineReducers({
    users: usersReducer,
    data: dataReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
