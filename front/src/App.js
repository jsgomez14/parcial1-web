import React, { Component } from 'react';
import './App.css';
import './FollowersList.js'



class App extends Component {

  constructor(props){
    super(props);
    this.state={
      followers:[],
      input: ""
    };
  }

  componentDidMount(){
    fetch("/followers", {method: "GET",
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


  render() {
    return (
      <div className="App">
        <SearchBox onSearch={this.onSearch.bind(this.)}/>
        <Records />
        <FollowersList followers = {this.state.followers}/>
      </div>
    );
  }
}

export default App;
