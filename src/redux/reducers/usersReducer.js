import axios from 'axios';

const initialState = {
    authUser: {},
    authorization: false,
    receivedError: '',
    loading: false
}

// Types
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_UNAUTHORIZATION = 'SET_UNAUTHORIZATION';
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';

// Users reducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                authUser: action.userData,
                authorization: true,
                receivedError: '',
                loading: false
            }
        case SET_UNAUTHORIZATION:
            return {
                ...state,
                authUser: {},
                authorization: false
            }
        case SET_ERROR:
            return {
                ...state,
                receivedError: action.error
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

// Actions
export const setAuthUserData = (userData) => ({ type: SET_AUTH_USER_DATA, userData });
export const setUnauthorization = () => ({ type: SET_UNAUTHORIZATION });
export const setError = (error) => ({ type: SET_ERROR, error });
export const setLoading = () => ({type: SET_LOADING})

// Thunks
export const signUp = (userCredentials) => async (dispatch) => {
    try {
        const response = await axios.post('/signup', userCredentials);
        setAuthToken(response.data.token);
        dispatch(setMe());
    } catch (err) {
        if (err.response.data.message === "Password should be at least 6 characters") {
            dispatch(setError('Пароль слишком простой'))
        } else if (err.response.data.message === "The email address is already in use by another account.") {
            dispatch(setError('Пользователь с таким email уже существует'))
        } else if (err.response.data === "Passwords must match") {
            dispatch(setError('Пароли должны совпадать'));
        } else if (err.response.data === "User with this name already exists") {
            dispatch(setError('Пользователь с таким именем уже существует'));
        }
    }
}

export const login = (userCredentials) => async (dispatch) => {
    try {
        const response = await axios.post('/login', userCredentials);
        setAuthToken(response.data.token);
        dispatch(setMe());
    } catch (error) {
        dispatch(setError('Неправильный email или пароль'));
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch(setUnauthorization());
}

export const setMe = () => async (dispatch) => {
    dispatch(setLoading())
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data));
}

export const setNewAboutMe = (aboutMe) => async (dispatch) => {
    await axios.post('/users/aboutme', {aboutMe});
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data))
}

export const setNewStatus = (status) => async (dispatch) => {
    await axios.post('/users/status', {status});
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data))
}

// Set auth token
const setAuthToken = (authToken) => {
    const token = `Bearer ${authToken}`;
    localStorage.setItem("token", token);
    axios.defaults.headers.common['Authorization'] = token;
}

export default usersReducer;