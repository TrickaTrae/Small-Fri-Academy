import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import ScrollToTop from './scroll-to-top';
import Home from '../pages/home/home';
import About from '../pages/about/about'
import Infants from '../pages/infants/infants';
import Age2 from '../pages/age2/age2';
import PreSchool from '../pages/pre-school/pre-school';
import Kindergarten from '../pages/kindergarten/kindergarten';
import Contact from '../pages/contact/contact';

export default () => (
    <BrowserRouter>
    <ScrollToTop />
    <NavBar/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/infants' component={Infants} />
            <Route path='/2-year-olds' component={Age2} />
            <Route path='/pre-School' component={PreSchool} />
            <Route path='/kindergarten' component={Kindergarten} />
            <Route path='/contact' component={Contact} />
        </Switch>
    <Footer/>
    </BrowserRouter>
)