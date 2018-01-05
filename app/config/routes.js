import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  MainContainer, HomeContainer, AuthenticateContainer, FeedContainer,
  LogoutContainer } from 'containers'

  //onEnter will run before actually routing you to that page
  //checkAuth is run every time a route is called to confirm authentication
export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth}/>
      </Route>
    </Router>
  )
}
