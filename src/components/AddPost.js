import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { connect } from 'react-redux';
import './styles/AddPost.css';
import AddPostForm from './forms/AddPostForm';
import { addPost } from './../redux/reducers/dataReducer';
import { Link } from 'react-router-dom';

const AddPost = ({ authUser, authorization, addPost }) => {

    const [openAddPost, setOpenAddPost] = useState(false);

    const onSubmit = (value) => {
        addPost(value.postTitle, value.postBody);
    }

    if (!authorization) {
        return <h5>Добавлять посты могут только авторизированные пользователи. <br/> <Link to='/login'>Войдите</Link> или <Link to='/signup'>зарегистрируйтесь</Link>.</h5>
    }

    return (
        <div>
            <button onClick={() => setOpenAddPost(!openAddPost)} type="button" class="btn btn-primary btn-lg btn-block add-post-btn">Новый пост<AddBoxIcon /></button>
            {openAddPost && (
                <div className="card mb-3 add-post">
                    <div className="row no-gutters">
                        <div className="col-md-2 user-info">
                            <h5>{authUser.details.username}</h5>
                            <img src={authUser.details.imageUrl} className="card-img" alt="image" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <AddPostForm onSubmit={onSubmit} setOpenAddPost={setOpenAddPost}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    authUser: state.users.authUser,
    authorization: state.users.authorization
})

export default connect(mapStateToProps, { addPost })(AddPost);
