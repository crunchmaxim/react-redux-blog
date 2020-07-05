import axios from 'axios';
import {setAuthUserData} from './usersReducer';

const initialState = {
    posts: [],
    postComments: [],
    dataLoading: false
}

// Types
const SET_ALL_POSTS = 'SET_ALL_POSTS';
const SET_DATA_LOADING = 'SET_DATA_LOADING';
const SET_POST_COMMENTS = 'SET_POST_COMMENTS';

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
        case SET_POST_COMMENTS:
            return {
                ...state,
                postComments: action.comments,
                dataLoading: false
            }
        default:
            return state;
    }
}

// Actions
export const setAllPosts = (posts) => ({type: SET_ALL_POSTS, posts})
export const setDataLoading = () => ({type: SET_DATA_LOADING})
export const setPostComments = (comments) => ({type: SET_POST_COMMENTS, comments})

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

export const getPostComments = (postId) => async (dispatch) => {
    const response = await axios.get(`/posts/${postId}/comments`);
    dispatch(setPostComments(response.data));
}

export const addComment = (postId, body) => async (dispatch) => {
    await axios.post(`/posts/${postId}/comment`, {body});
    dispatch(getPostComments(postId));
}

export const deleteComment = (commentId, postId) => async (dispatch) => {
    await axios.delete(`/comments/${commentId}`);
    dispatch(getPostComments(postId));
}

export const setPostImage = (postId, image) => async (dispatch) => {
    await axios.post(`/posts/${postId}/image`, image);
    const response = await axios.get('/posts');
    dispatch(setAllPosts(response.data));
}

export default dataReducer;
