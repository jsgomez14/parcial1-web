import React, { Component } from 'react';
import PropTypes from "prop-types";


class Follower extends Component{
    constructor(props)
    {
        super(props);
    }


    

    submit(){
        this.props.onSubmit(this.props.follower.login)
        .then(this.props.setRecords(this.props.follower.login));
    }
    render(){
        return(
        <div>
            <a href="#" onClick={this.submit()}>{this.props.follower.login}</a>
        </div>);
    }
}

Follower.PropTypes = {
    follower: PropTypes.object.isRequired
}


export default Follower;
