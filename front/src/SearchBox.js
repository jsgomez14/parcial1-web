import React, {Component} from 'react';
import PropTypes  from 'prop-types';

class SearchBox extends Component {
    
    constructor(props){
        super(props);
        this.state={
            input: ""
        }
    }

    onSubmit(){
        console.log("StateInput:"+this.state.input);        
        this.props.onSubmit(this.state.input);
    }

    handleUserNameOnChange(un){
        this.setState({
            input: un
        })
    }

    //defaultValue={this.props.input ? this.props.input: ""} en el input
    render(){
        return (
            <div className="SearchBox">
                <form>
                    <input type="text" 
                    id="userName" onChange={(e)=>{this.handleUserNameOnChange(e.target.value)}}
                    >
                    </input>
                    <button type="submit" onClick={()=>this.onSubmit.bind(this)}>Submit</button>
                </form>
                
            </div>
        );
    }
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;


    