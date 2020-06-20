import React from 'react';
import { connect } from 'react-redux';
import {logout} from './../redux/reducers/usersReducer';
import { Link } from 'react-router-dom';
import logo from './../images/logo192.png';
import './styles/Navbar.css';

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <img className='logo' src={logo}/>
      <Link class="navbar-brand" to="/">Socialapp 2</Link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">На главную</Link>
          </li>
          {props.authorization ? (
            <>
            <li class="nav-item">
              <Link class="nav-link" to="/">Вы авторизованы как {props.authUser.details.username}</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="" onClick={props.logout}>Выйти</Link>
            </li>
            </>
          ) : (
            <>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Войти</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">Зарегистрироваться</Link>
              </li>
            </>
            )}
        </ul>
      </div>
    </nav>
  )
};

const mapStateToProps = (state) => ({
  authUser: state.users.authUser,
  authorization: state.users.authorization
})

export default connect(mapStateToProps, {logout})(Navbar);