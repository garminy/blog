/* Post in category */
import React from 'react';

const CategoryPost = React.createClass({
  render: function() {
    var post = this.props.post;
    return (
      <a href={post.url} className={"side-post"}>
        <h4 className={"side-post-title"}>
          { post.title }
        </h4>
        <div className={"side-post-abstract"}>
          { post.content }
        </div>
      </a>
    );
  }
});

export default CategoryPost;
