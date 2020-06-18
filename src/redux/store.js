import {createStore, combineReducers, applyMiddleware} from 'redux';
import usersReducer from './reducers/usersReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    users: usersReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
