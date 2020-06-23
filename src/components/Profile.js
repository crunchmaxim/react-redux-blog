import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Profile.css';
import { setNewAboutMe, setNewStatus, setUserImage } from '../redux/reducers/usersReducer';
import AboutMe from './AboutMe';
import Status from './Status';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';

const Profile = ({ authorization, authUser, setNewAboutMe, setNewStatus, setUserImage, loading }) => {

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
            <div>Загрузка...</div>
        )
    }

    if (!authorization) {
        return (
            <div class="card">
                <div class="card-body">
                    <p class="card-text profile-title">Вы не авторизированы</p>
                    <Link to='/login' class="btn btn-primary profile-btn">Войти</Link>
                    <Link to='/signup' class="btn btn-primary profile-btn">Регистрация</Link>
                </div>
            </div>
        )
    }

    return (
        <div class="card">
            <h4 class="card-title profile-title">{authUser.details.username}</h4>
            <img src={authUser.details.imageUrl} class="card-img-top" alt="image" />
            <div class="card-body">
                <input id='imageInput' type='file' hidden onChange={handleUserImage}/>
                <p className='change-user-image' onClick={openImageInput}>Поменять изображение <AddPhotoAlternateIcon/></p>
                <AboutMe aboutMe={authUser.details.aboutMe} setNewAboutMe={setNewAboutMe} />
                <Status status={authUser.details.status} setNewStatus={setNewStatus} />
                <p class="card-text">Постов: {authUser.posts.length} <BookmarkIcon/></p>
                <p class="card-text">Комментариев: {authUser.comments.length} <MessageIcon/></p>
                <p class="card-text">Лайков: {authUser.likes.length} <FavoriteIcon/></p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authUser: { ...state.users.authUser },
    authorization: state.users.authorization,
    loading: state.users.loading
})

export default connect(mapStateToProps, { setNewAboutMe, setNewStatus, setUserImage })(Profile);