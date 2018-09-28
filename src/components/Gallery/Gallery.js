import React from 'react';
import { connect } from 'react-redux';

import Photo from '../Photo';
import './style.css';

class Gallery extends React.Component{
    render(){
        return (
            <div className="gallery">
                {this.props.photos.map(photo => <Photo url={photo} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps, null)(Gallery);