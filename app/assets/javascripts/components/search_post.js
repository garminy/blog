import React from 'react';
import { Link } from 'react-router';

const SearchPost = React.createClass({
  render: function(){
    var post = this.props.post;
    var index = this.props.index;
    return (
      <Link to={`/posts/${post.id}`} className='show-post post-row' id='show_post'>
        <h2 className='post-title'>
          { post.title }
        </h2>
        <div className="post-extra">
          <div className="author-info">
            <i className="ion-person"></i>
            <span className="post-date">王若愚Max 发表于 { post.created_at } </span>
          </div>
          <div className="tags-info">
            <i className="ion-pricetags"></i>
            { post.tag_list }
          </div>
        </div>
        <div className="post-content">
          { post.content }
        </div>
        <div className="counter">
          {index}
        </div>
      </Link>
    );
  }
});

export default SearchPost;
