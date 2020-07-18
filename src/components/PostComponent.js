import React from 'react';
import dayjs from 'dayjs';
import './styles/PostComponent.css';
import { connect } from 'react-redux';
import DeletePost from './DeletePost';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { deletePost, likePost, unlikePost, setPostImage } from './../redux/reducers/dataReducer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Comments from './Comments';
import AddPostImage from './AddPostImage';

const PostComponent = (props) => {
    const handleLike = (postId) => {
        props.likePost(postId);
    }

    const handleUnlike = (postId) => {
        props.unlikePost(postId);
    }

    return (
        <div className="card mb-3 post">
            <div className="row no-gutters">
                <div className="col-2 user-info">
                    <h5>{props.username}</h5>
                    <img src={props.imageUrl} className="card-img post-user-image" alt="image" />
                </div>
                <div className="col-10">
                    <div className="card-body post-body">
                        <h5 className="card-title post-title">{props.title}</h5>
                        {props.postImageUrl && <div className='post-image'><img src={props.postImageUrl}/></div>}
                        <p className="card-text">{props.body}</p>
                        <p className="card-text"><small className="text-muted"><AccessTimeIcon /> {dayjs(props.createdAt).format('DD.MM.YYYY г.')}</small></p>
                        <div className="like-comment">
                            <span>
                                {props.authorization && props.authUser.likes.filter(like => like.postId === props.postId).length > 0
                                    ? (<FavoriteIcon className='like-btn onlike' onClick={() => handleUnlike(props.postId)} />)
                                    : (<FavoriteBorderIcon className='like-btn' onClick={() => handleLike(props.postId)} />)} {props.likesCount}
                            </span>
                            <Comments commentsCount={props.commentsCount} postId={props.postId}/>
                        </div>
                        {props.authorization && (props.authUser.details.username === props.username ? <DeletePost postId={props.postId} deletePost={props.deletePost} /> : '')}
                        {props.authorization && (props.authUser.details.username === props.username ? <AddPostImage postId={props.postId} setPostImage={props.setPostImage} /> : '')}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authUser: state.users.authUser,
    authorization: state.users.authorization
})

export default connect(mapStateToProps, { deletePost, likePost, unlikePost, setPostImage })(PostComponent);
