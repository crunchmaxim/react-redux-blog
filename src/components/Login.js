import React from 'react';
import LoginForm from './forms/LoginForm';
import './styles/Login.css';

const Login = (props) => {
    const onSubmit = (value) => {
        console.log(value)
    }
    return (
        <LoginForm onSubmit={onSubmit}/>
    )
};

export default Login;