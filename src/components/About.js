import React, { Component } from 'react';
import NavBar from './NavBar'
import '../Style.css'

class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Hello from About Page</h1>
            </div>
        )
    }
}
export default About;