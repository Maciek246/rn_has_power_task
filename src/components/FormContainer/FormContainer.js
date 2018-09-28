import React from 'react';
import Form from '../Form';
import { connect } from 'react-redux';
import { fetch_photos } from '../../actions';

class FormContainer extends React.Component{
    
    state = {
        type: 'cats',
        count: 1
    }
    
    typeHandler = (e) => {
        this.setState({type: e.target.value});
    }
    
    countHandler = (e) => {
        if(e.target.value > 10){
            this.setState({count: 10});
        }
        else if(e.target.value < 1){
            this.setState({count: 1});
        }
        else this.setState({count: e.target.value});
        
    }
    
    sendRequest = (e) => {
        e.preventDefault();
        this.props.fetch_photos(this.state.type, this.state.count);
    }
    
    render(){
        return (
            <Form 
                typeHandler={this.typeHandler} 
                countHandler={this.countHandler} 
                sendRequest={this.sendRequest} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_photos: (type, count) => dispatch(fetch_photos(type, count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);