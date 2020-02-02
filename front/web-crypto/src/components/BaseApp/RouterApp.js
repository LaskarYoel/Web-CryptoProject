import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Favorites from '../UserPages/Favorites'
import Login from '../UserPages/Login'
import Home from './Home'
import history from './history'

class RouterApp extends React.Component {


  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>
      </Router>
    )
  }
}
export default RouterApp