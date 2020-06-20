import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import SignUp from './components/SignUp';
import Login from './components/Login';
import jwtDecode from 'jwt-decode';
import {logout, setMe} from './redux/reducers/usersReducer';

axios.defaults.baseURL = 'https://europe-west1-socialapp2-f9053.cloudfunctions.net/api';

const token = localStorage.token;
if (token) {
  debugger;
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp*1000 < Date.now()) {
    store.dispatch(logout());
  } else {
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(setMe());
  }
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app-wrapper'>
          <Navbar />
          <div className='container'>
            <Route exact path='/'>Home page</Route>
            <Route path='/login'><Login /></Route>
            <Route path='/signup'><SignUp /></Route>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
