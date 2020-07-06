import React from 'react';
import './styles/ProfileLoadingTemplate.css';
import noImg from './../images/no-img.png';
import './styles/PostLoadingTemplate.css';

const PostLoadingTemplate = () => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-2 user-info">
                    <div className="template-post-username"></div>
                    <img src={noImg} className="card-img" alt="image" />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <div className="template-post-title"></div>
                        <div className="template-post-body"></div>
                        <div className="template-post-body"></div>
                        <div className="template-post-body"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostLoadingTemplate;
