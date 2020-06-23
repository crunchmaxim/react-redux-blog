import axios from 'axios';
import {setAuthUserData} from './usersReducer';

const initialState = {
    posts: [],
    dataLoading: false
}

// Types
const SET_ALL_POSTS = 'SET_ALL_POSTS';
const SET_DATA_LOADING = 'SET_DATA_LOADING';

const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts,
                dataLoading: false
            }
        case SET_DATA_LOADING:
            return {
                ...state,
                dataLoading: true
            }
        default:
            return state;
    }
}

// Actions
export const setAllPosts = (posts) => ({type: SET_ALL_POSTS, posts})
export const setDataLoading = () => ({type: SET_DATA_LOADING})

// Thunks
export const getAllPosts = () => async (dispatch) => {
    dispatch(setDataLoading());
    const response = await axios.get('/posts');
    dispatch(setAllPosts(response.data));
}

export const addPost = (title, body) => async (dispatch) => {
    dispatch(setDataLoading());
    await axios.post('/posts', {title, body});
    dispatch(getAllPosts());
}

export const deletePost = (postId) => async (dispatch) => {
    dispatch(setDataLoading());
    await axios.delete(`/posts/${postId}`);
    dispatch(getAllPosts());
}

export const likePost = (postId) => async (dispatch) => {
    await axios.get(`/posts/${postId}/like`);
    const response = await axios.get('/posts');
    dispatch(setAllPosts(response.data));
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data));
}

export const unlikePost = (postId) => async (dispatch) => {
    await axios.get(`/posts/${postId}/unlike`);
    const response = await axios.get('/posts');
    dispatch(setAllPosts(response.data));
    const userData = await axios.get('/me');
    dispatch(setAuthUserData(userData.data));
}

export default dataReducer;
