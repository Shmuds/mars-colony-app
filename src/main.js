import React, { Component } from 'react';
import Home from './home.js';
import Register from './Register.js';
import Encounter from './Encounter.js';
import Report from './Report.js';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/encounter' component={Encounter}/>
      <Route path='/report' component={Report}/>
    </Switch>
 </BrowserRouter>
)


export default Main
