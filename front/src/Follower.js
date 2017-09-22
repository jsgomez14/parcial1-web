import React, { Component } from 'react';
import PropTypes from "prop-types";


class Follower extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
        <div>
            <div >{this.props.follower.login}</div>
        </div>);
    }
}

Follower.PropTypes = {
    follower: PropTypes.object.isRequired
}


export default Follower;
