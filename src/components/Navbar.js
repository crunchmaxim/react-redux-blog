import React from 'react';
import { connect } from 'react-redux';
import {logout} from './../redux/reducers/usersReducer';
import { Link } from 'react-router-dom';
import logo from './../images/logo192.png';
import Notifications from './Notifications';
import './styles/Navbar.css';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <Link to="/"><img className='logo' src={logo}/></Link>
      <Link className="navbar-brand" to="/">Socialapp 2</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto navbar-links">
          {props.authorization ? (
            <>
            <li className="nav-item">
              <Link className="nav-link" to="/">Вы авторизованы как {props.authUser.details.username}</Link>
            </li>
            <li className="nav-item">
              <Notifications/>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="" onClick={props.logout}>Выйти</Link>
            </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Войти</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Зарегистрироваться</Link>
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