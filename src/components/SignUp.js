import React from 'react';
import SignUpForm from './forms/SignUpForm';
import './styles/SignUp.css';
import { connect } from 'react-redux';
import {signUp} from './../redux/reducers/usersReducer';
import { Redirect } from 'react-router-dom';

const SignUp = (props) => {
    const onSubmit = (value) => {
        props.signUp(value);
    }

    if (props.authorization) return <Redirect to='/'/>

    return (
        <SignUpForm onSubmit={onSubmit} receivedError={props.receivedError} loading={props.loading}/>
    )
};

const mapStateToProps = (state) => ({
    receivedError: state.users.receivedError,
    authorization: state.users.authorization,
    loading: state.users.loading
})

export default connect(mapStateToProps, {signUp})(SignUp);
