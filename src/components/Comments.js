import React, { useState } from 'react';
import MessageIcon from '@material-ui/icons/Message';
import './styles/Comments.css';
import { connect } from 'react-redux';
import { getPostComments } from './../redux/reducers/dataReducer';
import CommentComponent from './CommentComponent';
import AddComment from './AddComment';
import { Link } from 'react-router-dom';

const Comments = (props) => {
    const [openComments, setOpenComments] = useState(false);    

    const getComments = () => {
        if (!openComments) {
            props.getPostComments(props.postId)
        }
        setOpenComments(!openComments);
    }

    return (
        <>
            <span><MessageIcon className='comments-icon' onClick={getComments} /> {props.commentsCount}</span>
            {openComments && (props.postComments.length > 0 && (props.postId === props.postComments[0].postId) ? (
                <div className='comments-wrapper'>
                    {props.postComments.map(comment =>
                        <CommentComponent
                            username={comment.username}
                            imageUrl={comment.imageUrl}
                            body={comment.body}
                            createdAt={comment.createdAt}
                        />
                    )}
                    {props.authorization 
                    ? <AddComment postId={props.postId} imageUrl={props.authUser.details.imageUrl} username={props.authUser.details.username}/> 
                    : <span>Оставлять комментарии могут только авторизированные пользователи.&nbsp;<Link to='/signup'>Зарегистрируйтесь</Link> или <Link to='/login'>войдите</Link>.</span>}
                </div>
            ) : (
                <div className='comments-wrapper'>
                    {props.authorization 
                    ? <AddComment postId={props.postId} imageUrl={props.authUser.details.imageUrl} username={props.authUser.details.username}/> 
                    : <span>Оставлять комментарии могут только авторизированные пользователи.&nbsp;<Link to='/signup'>Зарегистрируйтесь</Link> или <Link to='/login'>войдите</Link>.</span>}
            </div>
            ))}
        </>
    )
}

const mapStateToProps = (state) => ({
    postComments: state.data.postComments,
    dataLoading: state.data.dataLoading,
    authorization: state.users.authorization,
    authUser: state.users.authUser

})

export default connect(mapStateToProps, { getPostComments })(Comments);
