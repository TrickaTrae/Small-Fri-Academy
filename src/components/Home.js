import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css'

class Home extends Component {
    render() {
        return (
            <div>

                {/* nav bar */}
                <nav className="navbar navbar-expand-lg navbar-dark myNav">
                    <a className="navbar-brand" href="/">Small Fri Academy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className="navbar-nav">
                            <Link to="/About"><a className="nav-item nav-link">About</a></Link>
                            <Link to="/Infants"><a className="nav-item nav-link">Infants</a></Link>
                            <Link to="/2yearolds"><a className="nav-item nav-link">2 year olds</a></Link>
                            <Link to="/Pre-School"><a className="nav-item nav-link">Pre-School</a></Link>
                            <Link to="/Kindergarten"><a className="nav-item nav-link">Kindergarten</a></Link>
                        </div>
                    </div>
                </nav>
                {/* nav bar */}


            </div>
        )
    }
}
export default Home;