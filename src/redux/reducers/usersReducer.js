import axios from 'axios';

const initialState = {
    authUser: {},
    authorization: false
}

// Types
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_UNAUTHORIZATION = 'SET_UNAUTHORIZATION';

// Users reducer
const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                authUser: action.userData,
                authorization: true
            }
        case SET_UNAUTHORIZATION:
            return {
                ...state,
                authUser: {},
                authorization: false
            }
        default:
            return state;
    }
}

// Actions
export const setAuthUserData = (userData) => ({ type: SET_AUTH_USER_DATA, userData});
export const setUnauthorization = () => ({type: SET_UNAUTHORIZATION})

// Thunks
export const signUp = (userCredentials) => async (dispatch) => {
    const response = await axios.post('/signup', userCredentials);
    setAuthToken(response.data.token);
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data));
}

export const login = (userCredentials) => async (dispatch) => {
    const response = await axios.post('/login', userCredentials);
    setAuthToken(response.data.token);
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data));
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch(setUnauthorization());
}

export const setMe = () => async (dispatch) => {
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data));
}

// Set auth token
const setAuthToken = (authToken) => {
    const token = `Bearer ${authToken}`;
    localStorage.setItem("token", token);
    axios.defaults.headers.common['Authorization'] = token;
}

export default usersReducer;