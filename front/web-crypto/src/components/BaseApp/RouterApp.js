import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Favorites from '../UserPages/Favorites'
import Login from '../UserPages/Login'
import Home from './Home'
import history from './history'
import Navbar from '../BaseFront/NavBar'

class RouterApp extends React.Component {


  render() {
    return (
      <Router history={history}>
        <Navbar/>
        
      </Router>
    )
  }
}
export default RouterApp