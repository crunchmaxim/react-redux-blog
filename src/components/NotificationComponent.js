import React from 'react';
import './styles/NotificationComponent.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import DoneIcon from '@material-ui/icons/Done';

const NotificationComponent = (props) => {
    return (
        <div className="alert alert-primary notification">
            Пользователь <img src={props.senderImage} className='sender-image' /> {props.sender} {props.type === 'comment' ? <span>оставил комментарий <MessageIcon className='notification-comment' /> к</span> : <span>поставил лайк <FavoriteIcon className='notification-like' /> </span>} посту <span>"{props.postTitle}"</span>.
            <br />
            <div className='mark-read' onClick={() => props.deleteNotification(props.notificationId)}><p>Отметить как прочитанное <DoneIcon /></p></div>
        </div>
    )
}

export default NotificationComponent;
