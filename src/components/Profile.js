import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Profile.css';
import { setUserImage } from '../redux/reducers/usersReducer';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ProfileLoadingTemplate from './ProfileLoadingTemplate';

const Profile = ({ authorization, authUser, setUserImage, loading }) => {

    const openImageInput = () => {
        const imageInput = document.getElementById('imageInput');
        imageInput.click();
    }

    const handleUserImage = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        setUserImage(formData);
    }

    if (loading) {
        return (
            <ProfileLoadingTemplate />
        )
    }

    if (!authorization) {
        return (
            <div className="card not-auth">
                <div className="card-body">
                    <p className="card-text profile-title">Вы не авторизированы</p>
                    <div className="not-auth-buttons">
                        <Link to='/login' className="btn btn-primary profile-btn">Войти</Link>
                        <Link to='/signup' className="btn btn-primary profile-btn">Регистрация</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div class="card">
                <h4 class="card-title profile-title">{authUser.details.username}</h4>
                <img src={authUser.details.imageUrl} className="card-img-top profile-image" alt="image" />
                <div class="card-body profile-info-wrapper">
                    <input id='imageInput' type='file' hidden onChange={handleUserImage} />
                    <p className='change-user-image' onClick={openImageInput}>Поменять изображение <AddPhotoAlternateIcon /></p>
                    <p class="card-text profile-info">Постов: {authUser.posts.length} <BookmarkIcon /></p>
                    <p class="card-text profile-info">Комментариев: {authUser.comments.length} <MessageIcon /></p>
                    <p class="card-text profile-info">Лайков: {authUser.likes.length} <FavoriteIcon /></p>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    authUser: { ...state.users.authUser },
    authorization: state.users.authorization,
    loading: state.users.loading
})

export default connect(mapStateToProps, { setUserImage })(Profile);