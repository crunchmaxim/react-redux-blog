import React from 'react';
import SignUpForm from './forms/SignUpForm';
import './styles/SignUp.css';
import { connect } from 'react-redux';
import {signUp} from './../redux/reducers/usersReducer';
import { withRouter } from 'react-router-dom';

const SignUp = (props) => {
    const onSubmit = (value) => {
        props.signUp(value);
    }
    return (
        <SignUpForm onSubmit={onSubmit} receivedError={props.receivedError}/>
    )
};

const mapStateToProps = (state) => ({
    receivedError: state.users.receivedError
})

export default connect(mapStateToProps, {signUp})(SignUp);
