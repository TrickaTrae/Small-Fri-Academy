import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    render() {
        return (
            <div>

                {/* nav bar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark myNav">
                    <a className="navbar-brand" href="/">
                        Small Fri Academy
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className="navbar-nav">
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/infants" className="nav-item nav-link">Infants</Link>
                            <Link to="/2-year-olds" className="nav-item nav-link">2 year olds</Link>
                            <Link to="/pre-school" className="nav-item nav-link">Pre-School</Link>
                            <Link to="/kindergarten" className="nav-item nav-link">Kindergarten</Link>
                            <Link to="/testimonials" className="nav-item nav-link">Testimonials</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
                {/* nav bar */}

            </div>
        )
    }
}
export default NavBar;