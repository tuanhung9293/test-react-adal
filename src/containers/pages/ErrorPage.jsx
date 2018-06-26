import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <h2>Error Page</h2>
                {
                    this.props.error
                }
            </div>
        );
    }
}

export default ErrorPage
