import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './encounter.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Encounter extends Component {
  constructor() {
    super();
    this.state = {encounters: []}
  }
  render() {
    return (
      <div className="encounter">
      <h1 className="encounterH1">
      Recent Encounters
<span>See an Alien? Report it!</span>
      </h1>
     <ul className="encounter-list">

     {this.state.encounters.reverse().map(function(saw){
       return (
         <li value={saw.id} className="encounter-content">
          {saw.date} - {saw.atype} <br />
          {saw.action}
         </li>
       );
     })}

     </ul>


      <Link to='/report/'> <button className="reportSighting" type="submit"> Report Encounter  </button> </Link>
      </div>
    )
  }
  componentDidMount() {
    axios.get('https://red-wdp-api.herokuapp.com/api/mars/encounters')
    .then(response =>{
      const saw = (response.data.encounters);
      this.setState({encounters: saw})
    })
  }
}

export default Encounter;
