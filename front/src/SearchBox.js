import React, {Component} from 'react';
import PropTypes  from 'prop-types';

class SearchBox extends Component {
    
    constructor(props){
        super(props);
        this.state={
            input: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        this.props.onSubmit(this.state.input);
    }

    handleUserNameOnChange(un){
        this.setState({
            input: un
        });
    }

    render(){
        return (
            <div className="SearchBox">
                <form>
                    <input type="text" 
                    id="userName" onChange={(e)=>{this.handleUserNameOnChange(e.target.value)}}
                    >
                    </input>
                    <a onClick={this.onSubmit} href="#">Submit</a>
                </form>
            </div>
        );
    }
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;


    