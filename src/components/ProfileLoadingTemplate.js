import React from 'react';
import './styles/ProfileLoadingTemplate.css';
import noImg from './../images/no-img.png';

const ProfileLoadingTemplate = () => {
    return (
        <div className="card">
            <div className='template-profile-username'></div>
            <img src={noImg} className="card-img-top"/>
            <div className='template-profile-change-img'></div>
            <div className='template-profile-info'></div>
            <div className='template-profile-info'></div>
            <div className='template-profile-info'></div>
        </div>
    )
}

export default ProfileLoadingTemplate;
