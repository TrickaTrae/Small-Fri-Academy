import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css'

class NavBar extends Component {
    render() {
        return (
            <div>

                {/* nav bar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark myNav">
                    <a className="navbar-brand" href="/">
                        Small Fri Academy
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" name="toggle navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className="navbar-nav">
                            <Link to="/About" className="nav-item nav-link">About</Link>
                            <Link to="/Infants" className="nav-item nav-link">Infants</Link>
                            <Link to="/2yearolds" className="nav-item nav-link">2 year olds</Link>
                            <Link to="/Pre-School" className="nav-item nav-link">Pre-School</Link>
                            <Link to="/Kindergarten" className="nav-item nav-link">Kindergarten</Link>
                            <Link to="/Testimonials" className="nav-item nav-link">Testimonials</Link>
                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
                {/* nav bar */}

            </div>
        )
    }
}
export default NavBar;