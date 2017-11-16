import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
    name: "",
    age: "",
    jobs: [],
    job_id: ""
  }
  this.updateAgeState = this.updateAgeState.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
      this.updateJobState = this.updateJobState.bind(this);
        this.registerInfo = this.registerInfo.bind(this);
  }
  render() {
    return (
     <div className="register">
        <h1 className="registerH1"> Register </h1>
        <input className="nameInput" type="text" placeholder="Name" value={this.state.name} onChange={this.updateNameState}/>
        <input className="inputAge" placeholder="Age" type="number" value={this.state.age} onChange={this.updateAgeState}/>

        <select className="registerOccupation" name="occupation" onChange={this.updateJobState}>
        <option className="occupation"> Select Occupation </option>
        {this.state.jobs.map(function(job){
          return (
            <option value={job.id}> {job.name} </option>
          );
        })}
        </select>
        <Link to='/encounter/'> <button className="click" type="submit" onClick={this.registerInfo}> Click here for mind blowing secrets </button> </Link>
      </div>

    )
  }

componentDidMount() {
  axios.get('https://red-wdp-api.herokuapp.com/api/mars/jobs')
  .then(response =>{
    const job = (response.data.jobs);
    this.setState({jobs: job})
  })
}
updateNameState(event) {
  this.setState({
    name:event.target.value,
  });
}
updateAgeState(event) {
this.setState({
  age:event.target.value,
 });
}
updateJobState(event) {
  this.setState({
    job_id: event.target.value,
  });
}
  registerInfo(event) {
  alert(`name: ${this.state.name} age: ${this.state.age} job: ${this.state.job_id}`);
    axios.post('https://red-wdp-api.herokuapp.com/api/mars/colonists',{
      "colonist" : {
        "name" : this.state.name ,
        "age" : this.state.age,
        "job_id" : this.state.job_id
      }
    })
    .then(function (response){
      var id =response.data.colonist.id;
      sessionStorage.setItem('job', id);
    })
    .catch(function(error){
      console.log(error);
    })
  }
}


export default Register;
