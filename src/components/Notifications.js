import React, { useState } from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { connect } from 'react-redux';
import './styles/Notifications.css';
import NotificationComponent from './NotificationComponent';
import { deleteNotification } from './../redux/reducers/usersReducer';

const Notifications = (props) => {
    const [openNotifications, setOpenNotifications] = useState(false);

    return (
        <div>
            {props.authorization && props.notifications.length > 0 ? (
                <div className='notifications-on' onClick={() => setOpenNotifications(!openNotifications)}>
                    <NotificationsActiveIcon />
                    <span class="badge badge-secondary">{props.notifications.length}</span>
                </div>
            ) : (
                    <div className='notifications-off'>
                        <NotificationsNoneIcon />
                    </div>
                )}
            {openNotifications && (
                <div className='notifications-wrapper'>
                    {props.notifications.map(not => <NotificationComponent
                        sender={not.sender}
                        senderImage={not.senderImage}
                        type={not.type}
                        postTitle={not.postTitle}
                        notificationId={not.id}
                        deleteNotification={props.deleteNotification}
                    />)}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    authorization: state.users.authorization,
    notifications: state.users.authUser.notifications
})

export default connect(mapStateToProps, {deleteNotification})(Notifications);