/* Post in category */
import React from 'react';
import { Link } from 'react-router'

const CategoryPost = React.createClass({
  render: function() {
    var post = this.props.post;
    return (
      <Link to={`/posts/${post.id}`} className="side-post">
        <h4 className={"side-post-title"}>
          { post.title }
        </h4>
        <div className={"side-post-abstract"}>
          { post.content }
        </div>
      </Link>
    );
  }
});

// <a href={post.url} className={"side-post"}>
// </a>
export default CategoryPost;
