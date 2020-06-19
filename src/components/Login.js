import React from 'react';
import LoginForm from './forms/LoginForm';
import './styles/Login.css';
import { connect } from 'react-redux';
import {login} from './../redux/reducers/usersReducer';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (value) => {
        props.login(value);
        props.history.push('/');
    }
    return (
        <LoginForm onSubmit={onSubmit}/>
    )
};



export default connect(null, {login})(withRouter(Login));