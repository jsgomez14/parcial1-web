import React, { Component } from 'react';
import './App.css';
import FollowersList from './FollowersList.js';
import SearchBox from './SearchBox.js';
import Records from './Records.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      followers:[],
      records: [],
      input: ""
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.setRecords = this.setRecords.bind(this);
  }

  onClickSubmit(text){
    console.log('onSubmit app.js', text);
    var quer = "/getFollowers/"+text;
    console.log(quer);
    fetch(quer, {method: "GET",
    headers:{accept: "application/json"}})
    .then((res)=>{
      if(res.ok) return res.json();
    })
    .then((followers) =>{
      console.log(followers);
      this.setState({
        followers: followers,
        records: this.firstRecord()
      });
    });
  }

  firstRecord(){
    var a = [];
    a.push(this.state.input);
    return a;
  }


  setRecords(record){
    var a = record
    var resp = this.state.records;
    resp.push(a)
    .then(this.setState({
      records: resp
    })); 
  }

//onSearch={this.onSearch.bind(this.)} dentro de searchbox, Agregar records
  render() {
    return (
      <div className="App">
        <SearchBox onSubmit={this.onClickSubmit} input={this.state.input}/>
        <Records records={this.state.records}/>
        <h3>is following:</h3>
        <FollowersList followers = {this.state.followers.data} onSubmit={this.onClickSubmit} setRecords={this.setRecords}/>
      </div>
    );
  }
}

export default App;
