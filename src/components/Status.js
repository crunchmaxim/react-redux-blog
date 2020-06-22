import React, { useState } from 'react';
import './styles/Profile.css';
import CreateIcon from '@material-ui/icons/Create';

const Status = (props) => {

    const [openStatus, setOpenStatus] = useState(false);
    const [status, setStatus] = useState('');

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleStatus = (newStatus) => {
        if (openStatus) {
            props.setNewStatus(newStatus);
        }
        setStatus(props.status);
        setOpenStatus(!openStatus);
    }

    return (
        <p class="card-text">Статус: {openStatus ? 
            <input value={status} onChange={onStatusChange} onBlur={() => handleStatus(status)}/> : (props.status ? props.status  : '')}
            <CreateIcon className='create-icon' onClick={() => handleStatus(status)}/>
            </p>
    )
}

export default Status;
