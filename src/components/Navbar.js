import React from 'react';

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Socialapp 2</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">На главную</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Войти</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">Зарегистрироваться</a>
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Navbar;