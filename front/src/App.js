import React, { Component } from 'react';
import './App.css';
import FollowersList from './FollowersList.js';
import SearchBox from './SearchBox.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      followers:[]
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
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
        followers: followers
      });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBox onSubmit={this.onClickSubmit}/>
        <h3>is following:</h3>
        <FollowersList followers = {this.state.followers.data} onSubmit={this.onClickSubmit}/>
      </div>
    );
  }
}

export default App;
