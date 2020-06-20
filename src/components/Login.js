import React from 'react';
import LoginForm from './forms/LoginForm';
import './styles/Login.css';
import { connect } from 'react-redux';
import {login} from './../redux/reducers/usersReducer';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (value) => {
        props.login(value);
    }
    return (
        <LoginForm onSubmit={onSubmit} receivedError={props.receivedError}/>
    )
};

const mapStateToProps = (state) => ({
    receivedError: state.users.receivedError
})

export default connect(mapStateToProps, {login})(Login);