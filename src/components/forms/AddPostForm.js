import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CloseIcon from '@material-ui/icons/Close';

const AddPostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CloseIcon className='add-post-close'onClick={() => props.setOpenAddPost(false)}/>
                <div className="form-group">
                    <label for="postTitle">Название поста:</label>
                    <Field name="postTitle" component={Input} validate={[requiredValidator]} type="text" class="form-control" id="postTitle" />
                </div>
                <div className="form-group">
                    <label for="postBody">Текст поста:</label>
                    <Field name="postBody" component={Textarea} validate={requiredValidator} type="text" class="form-control" id="postBody" />
                </div>
                {props.receivedError && <div className="alert alert-danger">{props.receivedError}</div>}
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        </div>
    )
};

// Input component
const Input = (props) => {
    return (
        <div className="form-group">
            <input {...props.input} {...props} />
            {props.meta.touched && props.meta.error ? <div className="alert alert-danger">{props.meta.error}</div> : ''}
        </div>
    )
};

// Textarea component
const Textarea = (props) => {
    return (
        <div className="form-group">
            <textarea {...props.input} {...props} />
            {props.meta.touched && props.meta.error ? <div className="alert alert-danger">{props.meta.error}</div> : ''}
        </div>
    )
};

// validators
const requiredValidator = (value) => {
    if (!value || value === '') {
        return 'Это поле необходимо';
    }
    return;
};

export default reduxForm({ form: 'addpost' })(AddPostForm);