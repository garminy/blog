import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import PostsIndex from './components/posts_index'


let rootElement = document.getElementById('post_area')
render(
  <PostsIndex />,
  rootElement
);
