import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Infants from './components/Infants'
import Age2 from './components/Age2'
import PreSchool from './components/Pre-school'
import Kindergarten from './components/Kindergarten'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Infants' component={Infants}/>
            <Route path='/2yearolds' component={Age2}/>
            <Route path='/Pre-School' component={PreSchool}/>
            <Route path='/Kindergarten' component={Kindergarten}/>
        </Switch>
    </BrowserRouter>
)