import React from 'react';
import SearchPost from './search_post';

const SearchPosts = React.createClass({
  render: function() {
    var index = 0;
    var search_posts = this.props.posts.map(function(post){
      index += 1;
      return (
        <SearchPost post={post} index={index} key={post.id}/>
      )
    })

    return (
      <div className='main-content'>
        {search_posts}
      </div>
    );
  }
})

export default SearchPosts;
