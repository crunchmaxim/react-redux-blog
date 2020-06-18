import axios from 'axios';

const initialState = {
    authUser: {}
}

// Types
const SIGN_UP = 'SIGN_UP';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

// Users reducer
const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Actions
const setAuthUserData = (userData) => ({ type: SET_AUTH_USER_DATA, userData});
// Thunks
const signUp = (userCredentials) => async (dispatch) => {
    const userData = await axios.post('/signup', userCredentials);
    debugger;
}

export default usersReducer;