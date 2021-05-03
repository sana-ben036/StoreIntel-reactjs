import './App.css';
import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Navigation from './components/pages/Navigation.js';
import Home from './components/pages/Home.js';
import Login from './components/pages/Login.js';
import SignUp from './components/pages/SignUp.js';
import Dashboard from './components/pages/Dashboard.js';


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Switch>
      
      <Route exact path='/' component={Home}  />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/dashboard" component={Dashboard}/>

      
    </Switch>


    </BrowserRouter>
  );
}

export default App;
