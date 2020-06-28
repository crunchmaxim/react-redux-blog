import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CloseIcon from '@material-ui/icons/Close';

const AddCommentForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CloseIcon className='add-post-close' onClick={() => props.setOpenAddComment(false)}/>
                <div className="form-group">
                    <Field name="commentBody" component={Textarea} validate={requiredValidator} type="text" class="form-control" id="commentBody" />
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
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

export default reduxForm({ form: 'addcomment' })(AddCommentForm);