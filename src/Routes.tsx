import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AboutMe from './pages/about-me/AboutMe';
import Contact from './pages/contact/Contact';
import Error404 from './pages/errors/Error404';
import './Routes.scss'

const Routes = () => {
  
  return (
    <div className="view-routes">
      <Switch>
        <Route exact={true} path="/"  component={AboutMe}/>
        <Route exact path="/contacts" component={Contact}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </div>
  )
}

export default Routes
