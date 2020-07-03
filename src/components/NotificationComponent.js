import React from 'react';
import './styles/NotificationComponent.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';

const NotificationComponent = (props) => {
    return (
        <div class="alert alert-primary notification">
            Пользователь <img src={props.senderImage} className='sender-image' /> {props.sender} {props.type === 'comment' ? <span>оставил комментарий <MessageIcon className='notification-comment'/> к</span> : <span>поставил лайк <FavoriteIcon className='notification-like'/> </span>} посту <span>"{props.postTitle}"</span>.
        </div>
    )
}

export default NotificationComponent;
