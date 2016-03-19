import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, hashHistory, Redirect } from 'react-router'

import App from './components/app'
import PostsIndex from './components/posts_index'
import PostShow from './components/post_show'

let rootElement = document.getElementById('post_area')

render(
  <App />,
  rootElement
);


render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="posts" component={PostsIndex} handler={PostsIndex} addHandlerKey={true}/>
      <Route path="posts/:id" component={PostShow} handler={PostShow} addHandlerKey={true}/>
      <Redirect from="posts/:id" to="/posts/:id" />
    </Route>
  </Router>, 
  rootElement
);
