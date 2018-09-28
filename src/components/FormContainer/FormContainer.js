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
        if(e.target.value === 'random'){
            let animals = ['birds', 'cats', 'shibes']
            let index = Math.floor(Math.random() * animals.length)
            this.setState({type: animals[index]});
        }
        else{
            this.setState({type: e.target.value});
        }
    }
    
    countHandler = (e) => {
        this.setState({count: e.target.value});
    }
    
    sendRequest = (e) => {
        e.preventDefault();
        this.props.fetch_photos(this.state.type, this.state.count);
        console.log(this.props.photos);
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