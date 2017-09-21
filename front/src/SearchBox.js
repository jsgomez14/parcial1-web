import React, {Component} from 'react';
import PropTypes  from 'prop-types';

class SearchBox extends Component {
    
    constructor(props){
        super(props);
    }

    onKeyPress(evt){
        if(evt.key === "Enter"){
            this.props.onSearch(evt.input.value);
        }
    }

    render(){
        return (
            <div className="SearchBox">
                <input type="text" 
                ref = {(input)=>this.input = input}
                defaultValue={this.props.user ? this.props.user: ""} 
                onKeyPress = {this.onKeyPress.bind(this)}>
                </input>
                <button type="submit">Submit</button>
            </div>
        );
    }
}

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
};

    