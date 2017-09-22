import React, { Component } from 'react';
import './App.css';
import FollowersList from './FollowersList.js';
import SearchBox from './SearchBox.js';
//import Records from './Records.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      followers:[],
      input: ""
    };
  }

 /** componentDidMount(){
    
    var quer = "/getFollowers/"+this.state.input;
    console.log(quer);
    fetch(quer, {method: "GET",
  headers:{accept: "application/json"}})
  .then((res)=>{
    if(res.ok) return res.json();
  })
  .then((followers) =>{
    this.setState({
      followers: followers
    });
  });
  console.log(this.state.followers);
  }**/

  refrescar(){
    var quer = "/getFollowers/"+this.state.input;
    console.log(quer);
    fetch(quer, {method: "GET",
    headers:{accept: "application/json"}})
    .then((res)=>{
      if(res.ok) return res.json();
    })
    .then((followers) =>{
      this.setState({
        followers: followers
      });
    });
  }

  onSubmit(text){
    this.setState({
      input: text
    }); 

    this.refrescar();
    
  console.log(this.state.followers);
  }

//onSearch={this.onSearch.bind(this.)} dentro de searchbox, Agregar records
  render() {
    return (
      <div className="App">
        <SearchBox onSubmit={this.onSubmit} input={this.state.input}/>
        <h3>{this.state.input} is following:</h3>
        <FollowersList followers = {this.state.followers.data}/>
      </div>
    );
  }
}

export default App;
