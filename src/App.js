import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import SignUp from './components/SignUp';

axios.defaults.baseURL = 'https://europe-west1-socialapp2-f9053.cloudfunctions.net/api';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app-wrapper'>
          <Navbar />
          <div className='container'>
            <Route exact path='/'>Home page</Route>
            <Route path='/signup'><SignUp/></Route>
            <Route path='/login'>Login</Route>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
