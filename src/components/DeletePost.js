import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles/DeletePost.css';

const DeletePost = (props) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDeletePost = () => {
        props.deletePost(props.postId)
    }

    return (
        <div>
            <div className="delete-post-btn" onClick={() => setOpenDeleteModal(!openDeleteModal)}><DeleteIcon className="delete" /></div>
            {openDeleteModal && <div className="alert alert-danger delete-post" role="alert">
                Вы уверены что хотите удалить этот пост?
                <br/>
                <button type="button" className="btn btn-secondary" onClick={() => setOpenDeleteModal(!openDeleteModal)}>Отмена</button>
                <button type="button" className="btn btn-primary" onClick={handleDeletePost}>Удалить</button>
            </div>}
        </div>
    )
}

export default DeletePost;
