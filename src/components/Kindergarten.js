import React, {Component} from 'react';
import NavBar from './NavBar'
import '../Style.css'

class Kindergarten extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <h1>Hello from Kindergarten Page</h1>
            </div>
        )
    }
}
export default Kindergarten;