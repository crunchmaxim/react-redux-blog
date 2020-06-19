import React from 'react';
import SignUpForm from './forms/SignUpForm';
import './styles/SignUp.css';
import { connect } from 'react-redux';
import {signUp} from './../redux/reducers/usersReducer';

const SignUp = (props) => {
    const onSubmit = (value) => {
        props.signUp(value);
    }
    return (
        <SignUpForm onSubmit={onSubmit}/>
    )
};

export default connect(null, {signUp})(SignUp);
