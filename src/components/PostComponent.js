import React from 'react';
import dayjs from 'dayjs';
import './styles/PostComponent.css';

const PostComponent = (props) => {

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-2 user-info">
                    <h5>{props.username}</h5>
                    <img src={props.imageUrl} className="card-img" alt="image" />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.body}</p>
                        <p className="card-text"><small className="text-muted">Размещено {dayjs(props.createdAt).format('DD.MM.YYYY г.')}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;
