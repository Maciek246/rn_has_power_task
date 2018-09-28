import React from 'react';

import './style.css';

class Photo extends React.Component{
    render(){
        return (
            <div className="photo">
                <img src={this.props.url} alt={this.props.url} />
            </div>
        );
    }
}

export default Photo;