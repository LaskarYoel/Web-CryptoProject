import React from 'react'
import { Router } from 'react-router-dom'
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