import React, { Component } from 'react';
import './page404.css';
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
          <div className="main-content">  
            <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div className="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                <Link to="/"><i className="fa fa-home"> </i>Home  </Link>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
