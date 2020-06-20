import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logo192.png';
import { Field, reduxForm } from 'redux-form';
import isEmail from 'validator/lib/isEmail';

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>
                <img src={logo} />
                <h5>Нет аккаунта? Зарегистрируйтесь <Link to='/signup'>здесь</Link>.</h5>
                <div className="form-group">
                    <label for="emailInput">Email:</label>
                    <Field name="email" component={Input} validate={[requiredValidator, emailValidator]} type="text" class="form-control" id="emailInput" />
                </div>
                <div className="form-group">
                    <label for="passwordInput">Пароль:</label>
                    <Field name="password" component={Input} validate={requiredValidator} type="password" class="form-control" id="passwordInput" />
                </div>
                {props.receivedError && <div className="alert alert-danger">{props.receivedError}</div>}
                <button type="submit" className="btn btn-primary">{props.loading ? (
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                ) : ('Войти')}</button>
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

// validators
const requiredValidator = (value) => {
    if (!value || value === '') {
        return 'Это поле необходимо';
    }
    return;
};

const emailValidator = (value) => {
    if (!isEmail(value)) {
        return 'Введите корректный email'
    }
    return;
};

export default reduxForm({ form: 'login' })(LoginForm);