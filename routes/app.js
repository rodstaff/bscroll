import React from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Nav from './nav'
import Container from './container'
import Home from '../components/home'
import Fruits from '../components/fruits'
import Veggies from '../components/veggies'
import Contact from '../components/contact'
import NotFound from '../components/not-found'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Home />
        <Fruits />
        <Veggies />
        <Contact />
      </div>
      // <Router history={hashHistory}>
      //   <Route path='/' component={Container}>

      //     <IndexRoute component={Home} />
      //     <Route path='#fruits' component={Fruits} />  
      //     <Route path='#veggies' component={Veggies} />
      //     <Route path='#contact' component={Contact} />
      //     <Route path='*' component={NotFound} />

      //   </Route>
      // </Router>
    );
  }
}
