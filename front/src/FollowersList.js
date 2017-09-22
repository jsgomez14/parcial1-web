import React, { Component } from 'react';
import PropTypes from "prop-types";
import Follower from "./Follower.js";

class FollowersList extends Component {
    constructor(props){
        super(props);
    }

    

    renderFollowers(){
        console.log(this.props.followers);
        return this.props.followers.map((t,i)=>{
            return <Follower follower={t} key={i}/>;
        });
    }

    render(){
        return(
        <div>
            <div className="container row">{this.props.followers ? this.renderFollowers():"No followers yet lol"}</div>
        </div>);
    }
}

FollowersList.PropTypes = {
    followers: PropTypes.array.isRequired
}

export default FollowersList;
