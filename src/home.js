import ReactDOM from 'react-dom';
import './home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
  <div className="home">
   <h1 className="homeTitle"> Mars Colony 1 </h1>
   <Link to='/register/'> <button className="enter" type="submit">  </button> </Link>
   <h2 className="homeSubTitle">Tap circle to be amazed</h2>
  </div>
  )
 }
 }




export default Home;
