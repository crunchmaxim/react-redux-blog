import React from 'react';
import dayjs from 'dayjs';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './styles/CommentComponent.css';
import { connect } from 'react-redux';
import DeleteComment from './DeleteComment';
import { deleteComment } from './../redux/reducers/dataReducer';

const CommentComponent = (props) => {
    return (
        <div className="card mb-3 comment">
            <div className="row no-gutters">
                <div className="col-md-2 comment-user-info">
                    <h5>{props.username}</h5>
                    <img src={props.imageUrl} className="card-img" alt="image" />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">{props.body}</p>
                        <p className="card-text comment-date"><small className="text-muted"><AccessTimeIcon /> {dayjs(props.createdAt).format('DD.MM.YYYY г.')}</small></p>
                        {props.authorization && props.authUser.details.username === props.username ? <DeleteComment commentId={props.commentId} postId={props.postId} deleteComment={props.deleteComment}/> : null}
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

export default connect(mapStateToProps, {deleteComment})(CommentComponent);