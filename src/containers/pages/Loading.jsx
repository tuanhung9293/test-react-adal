import React, { Component } from 'react';
import loadingImage from '../../assets/ajax-loader.gif';

class Loading extends Component {
    render() {
        return (
            <div className="spinner">
            <img src={loadingImage} alt=""/> <span className="ms-font-s-plus">Loading...</span>
          </div>
        );
    }
}

export default Loading
