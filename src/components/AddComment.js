import React, { useState } from 'react';
import AddCommentForm from './forms/AddCommentForm';
import './styles/AddComment.css';
import { connect } from 'react-redux';
import { addComment } from './../redux/reducers/dataReducer';

const AddComment = (props) => {
    const [openAddComment, setOpenAddComment] = useState(false);

    const onSubmit = (value) => {
        props.addComment(props.postId, value.commentBody);
        setOpenAddComment(!openAddComment);
    }

    return (
        <div>
            <button onClick={() => setOpenAddComment(!openAddComment)} type="button" class="btn btn-primary btn-lg btn-block add-comment-btn">Добавить комментарий</button>
            {openAddComment && (
                <div className="card mb-3 comment">
                    <div className="row no-gutters">
                        <div className="col-md-2 comment-user-info">
                            <h5>{props.username}</h5>
                            <img src={props.imageUrl} className="card-img" alt="image" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <AddCommentForm onSubmit={onSubmit} setOpenAddComment={setOpenAddComment} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default connect(null, {addComment})(AddComment);
