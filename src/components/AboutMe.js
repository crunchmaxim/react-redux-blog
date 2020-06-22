import React, { useState } from 'react';
import './styles/Profile.css';
import CreateIcon from '@material-ui/icons/Create';

const AboutMe = (props) => {

    const [openAboutMe, setOpenAboutMe] = useState(false);
    const [aboutMe, setAboutMe] = useState('');

    const onAboutMeChange = (event) => {
        setAboutMe(event.target.value);
    }

    const handleAboutMe = (newAboutMe) => {
        if (openAboutMe) {
            props.setNewAboutMe(newAboutMe);
        }
        setAboutMe(props.aboutMe);
        setOpenAboutMe(!openAboutMe);
    }

    return (
        <p class="card-text">Обо мне: {openAboutMe ?
            <input value={aboutMe} onChange={onAboutMeChange} onBlur={() => handleAboutMe(aboutMe)} /> : (props.aboutMe ? props.aboutMe : '')}
            <CreateIcon className='create-icon' onClick={() => handleAboutMe(aboutMe)} />
        </p>
    )
}

export default AboutMe;
