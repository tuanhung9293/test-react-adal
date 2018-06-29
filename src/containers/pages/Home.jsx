import React, { Component } from 'react';
import { MasterLayout } from '../../components/layouts';

class Home extends Component {
    render() {
        return (
            <MasterLayout activeLink="home">
                <div className="container home-page">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1" style={{backgroundColor: 'azure'}}>
                            <div className="page-header">
                                <h1>Todo List</h1>
                            </div>
                            <p>This sample demonstrates how to take advantage of ADAL JS for adding Azure AD authentication to your
                AngularJS apps.</p>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        );
    }
}

export default Home
