import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assetts/Small-Fri-Logo-Transparent.png';

class NavBar extends Component {
    render() {
        return (
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img className="d-inline-block align-text-center nav-logo" src={Logo} alt="Small Fri Logo" />
                            Small Fri Academy
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end px-2" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/about" className="nav-link" aria-current="page">About</Link>
                                <Link to="/infants" className="nav-link">Infants</Link>
                                <Link to="2-year-olds" className="nav-link">2 year olds</Link>
                                <Link to="/pre-school" className="nav-link">Pre-School</Link>
                                <Link to="/kindergarten" className="nav-link">Kindergarten</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar;