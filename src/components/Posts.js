import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {getAllPosts} from './../redux/reducers/dataReducer';
import PostComponent from './PostComponent';

const Posts = (props) => {
    useEffect(() => {
        props.getAllPosts();
        console.log('get all posts from use effect')
    }, [])

    return (
        <div>
            {props.posts.map(post => <PostComponent 
            imageUrl={post.imageUrl}
            username={post.username}
            body={post.body}
            createdAt={post.createdAt}
            title={post.title}
            />)}
        </div>
    )
};

const mapStateToProps = (state) => ({
    posts: state.data.posts
})

export default connect(mapStateToProps, {getAllPosts})(Posts);
