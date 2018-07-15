import { Switch, Route } from 'react-router-dom'
import React from 'react';
import { hot } from 'react-hot-loader'
import HelloWorld from './helloworld'
import NotFound from './NotFound';
import Home from './Home';
const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
  </main>
)

export default hot(module)(Main)