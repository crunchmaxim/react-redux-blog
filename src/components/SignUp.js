import React from 'react';
import SignUpForm from './forms/SignUpForm';

const SignUp = (props) => {
    const onSubmit = (value) => {
        console.log(value)
    }
    return (
        <SignUpForm onSubmit={onSubmit}/>
    )
};

export default SignUp;
