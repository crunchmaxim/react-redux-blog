import axios from 'axios';

const initialState = {
    posts: []
}

// Types
const SET_ALL_POSTS = 'SET_ALL_POSTS';

const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}

// Actions
export const setAllPosts = (posts) => ({type: SET_ALL_POSTS, posts})

// Thunks
export const getAllPosts = () => async (dispatch) => {
    const response = await axios.get('/posts');
    dispatch(setAllPosts(response.data));
}

export default dataReducer;
