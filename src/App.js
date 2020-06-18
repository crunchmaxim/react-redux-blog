import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>Home page</Route>
      <Route path='/signup'>Sign up</Route>
      <Route path='/login'>Login</Route>
    </BrowserRouter>
  );
}

export default App;
