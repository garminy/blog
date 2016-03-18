// 必须要页面加载完成后，才能使用ReactJS
import React from 'react';
import CategoryPost from './category_post';

const Posts = React.createClass({
  render: function() {
    var posts = this.props.posts;
    var postNodes = posts.map(function(post){
      return (
        <CategoryPost post={post} key={post.id}></CategoryPost>
      )
    }) 
    return (
      <div className={"category-posts"}>
        { postNodes }
      </div>
    );
  }

})

export default Posts;
