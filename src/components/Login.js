import React from 'react';
import LoginForm from './forms/LoginForm';
import './styles/Login.css';
import { connect } from 'react-redux';
import {login} from './../redux/reducers/usersReducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (value) => {
        props.login(value);
    }

    if (props.authorization) return <Redirect to='/'/>

    return (
        <LoginForm onSubmit={onSubmit} receivedError={props.receivedError} loading={props.loading}/>
    )
};

const mapStateToProps = (state) => ({
    receivedError: state.users.receivedError,
    authorization: state.users.authorization,
    loading: state.users.loading
})

export default connect(mapStateToProps, {login})(Login);