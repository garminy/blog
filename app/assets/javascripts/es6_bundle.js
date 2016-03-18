import React from 'react';
import { render } from 'react-dom'
// import PostsIndex from 'PostsIndex';
import PostsIndex from './components/posts_index';

console.log(PostsIndex);
console.log($)
render((
    <PostsIndex>
    </PostsIndex>
  ), 
  document.getElementById('post_area')
);
