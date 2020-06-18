import React from 'react';
import SignUpForm from './forms/SignUpForm';
import './styles/SignUp.css';

const SignUp = (props) => {
    const onSubmit = (value) => {
        console.log(value)
    }
    return (
        <SignUpForm onSubmit={onSubmit}/>
    )
};

export default SignUp;
