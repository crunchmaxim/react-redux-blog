import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Profile.css';
import CreateIcon from '@material-ui/icons/Create';
import { setNewAboutMe, setNewStatus } from '../redux/reducers/usersReducer';

const Profile = ({ authorization, authUser, setNewAboutMe, setNewStatus}) => {
    // Set new about me
    const [openAboutMe, setOpenAboutMe] = useState(false);
    const [aboutMe, setAboutMe] = useState('');

    const onAboutMeChange = (event) => {
        setAboutMe(event.target.value);
    }

    const handleAboutMe = (newAboutMe) => {
        if (openAboutMe) {
            setNewAboutMe(newAboutMe);
        }
        setAboutMe(authUser.details.aboutMe);
        setOpenAboutMe(!openAboutMe);
    }

    // Set new status
    const [openStatus, setOpenStatus] = useState(false);
    const [status, setStatus] = useState('');

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleStatus = (newStatus) => {
        if (openStatus) {
            setNewStatus(newStatus);
        }
        setStatus(authUser.details.status);
        setOpenStatus(!openStatus);
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
            <img src={authUser.details.imageUrl} class="card-img-top" alt="image" />
            <div class="card-body">
                <h5 class="card-title profile-title">{authUser.details.username}</h5>
                <p class="card-text">Обо мне: {openAboutMe ? 
                <input value={aboutMe} onChange={onAboutMeChange} onBlur={() => handleAboutMe(aboutMe)}/> : (authUser.details.aboutMe ? authUser.details.aboutMe  : '')}
                <CreateIcon className='create-icon' onClick={() => handleAboutMe(aboutMe)}/>
                </p>
                <p class="card-text">Статус: {openStatus ? 
                <input value={status} onChange={onStatusChange} onBlur={() => handleStatus(status)}/> : (authUser.details.status ? authUser.details.status  : '')}
                <CreateIcon className='create-icon' onClick={() => handleStatus(status)}/>
                </p>
                <p class="card-text">Постов создано: {authUser.posts.length}</p>
                <p class="card-text">Комментариев оставлено: {authUser.comments.length}</p>
                <p class="card-text">Поставлено лайков: {authUser.likes.length}</p>
                <a href="#" class="btn btn-primary">Создать пост</a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authUser: { ...state.users.authUser },
    authorization: state.users.authorization
})

export default connect(mapStateToProps, {setNewAboutMe, setNewStatus})(Profile);