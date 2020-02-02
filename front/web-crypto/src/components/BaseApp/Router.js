import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from '../UserPages/Login'
import Favorites from '../UserPages/Favorites'
import MiniDrawer from '../BaseFront/NavBar'

const Router = () => (
  
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/favorites' component={Favorites}/>
    </Switch>
  </main>
)

export default Router
