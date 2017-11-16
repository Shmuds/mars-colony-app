import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './report.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Report extends Component {
  constructor() {
    super();
    this.state= {
      aliens: [],
      alien_id: "",
      colonist_id: parseInt(sessionStorage.getItem("job")),
      action: "",
      date: "2017-11-13",
    }
  this.updateAliensState = this.updateAliensState.bind(this);
  this.updateActionState = this.updateActionState.bind(this);
  this.encounterListing = this.encounterListing.bind(this);
  }
  render() {
    return (
      <div className="report">
      <h1 className="reportH1"> Report an Encounter </h1>
      <h2 className="reportH2"> The Saftey on Mars is in your hands </h2>
      <select onChange={this.updateAliensState} className="selectAlien">
      <option className="alien-type"> Select Alien Type </option>
      {this.state.aliens.map(function(alien){
        return (
          <option value={alien.id}> {alien.type} </option>
        );
      })}
      </select>
      <input type="text" className="reportInput" placeholder="Action Taken" onChange={this.updateActionState}/>
        <Link to='/encounter/'> <button className="reportSubmit" type="submit" onClick={this.encounterListing}> Submit Report  </button> </Link>
      </div>
    )
  }
  componentDidMount() {
    axios.get('https://red-wdp-api.herokuapp.com/api/mars/aliens')
    .then(response =>{
      const alien = (response.data.aliens);
      this.setState({aliens: alien})
    })
  }
  updateAliensState(event) {
    this.setState({
      alien_id:event.target.value,
    });
  }
  updateActionState(event) {
  this.setState({
    action:event.target.value,
   });
  }
  encounterListing(event) {
    axios.post('https://red-wdp-api.herokuapp.com/api/mars/encounters',{
      "encounter": {
        "atype" : this.state.aliens[this.state.alien_id-1].type,
        "date" : this.state.date,
        "action" : this.state.action,
        "colonist_id" : this.state.colonist_id
      }
    })
    .then(function (response){
     console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
}
}

export default Report;
