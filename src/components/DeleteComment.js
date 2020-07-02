import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles/DeleteComment.css';

const DeleteComment = (props) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDeleteComment = () => {
        props.deleteComment(props.commentId, props.postId)
    }

    return (
        <div>
            <div className="delete-comment-btn" onClick={() => setOpenDeleteModal(!openDeleteModal)}><DeleteIcon className="delete" /></div>
            {openDeleteModal && <div class="alert alert-danger delete-comment" role="alert">
                Вы уверены что хотите удалить этот комментарий?
                <button type="button" class="btn btn-secondary" onClick={() => setOpenDeleteModal(!openDeleteModal)}>Отмена</button>
                <button type="button" class="btn btn-primary" onClick={handleDeleteComment}>Удалить</button>
            </div>}
        </div>
    )
}

export default DeleteComment;
