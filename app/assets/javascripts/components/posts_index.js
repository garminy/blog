/* 主要展示区域 */

import React from 'react';
import LeftSidebar from './left_sidebar';
import MainTitle from './main_title';
import Post from './post';


const PostsIndex = React.createClass({
  getInitialState: function() {
    return {
      data: {
        posts: [], 
        post: {}, 
        tags: []
      }
    }
  }, 

  _fetchData: function() {
    var that = this;
    return $.ajax({
      url: "/posts.json", 
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState({
          data: data
        });
      },
      error: function(xhr, status, err) {
        return console.error(this.props.url, status, err.toString());
      }
    });
  },

  componentWillReceiveProps: function() {
    this._fetchData();
  },

  componentDidMount: function() {
    $.bind_left_sidebar();
    this._fetchData();
  }, 

  componentDidUpdate: function() {
    $.setup_styles();
  }, 

  render: function() {
    var post = this.state.data.post;

    // left-sidebar
    var leftSidebar = (
      <LeftSidebar posts={this.state.data.posts} tags={this.state.data.tags} />
    );

    // .main-title
    var mainTitle = (
      <MainTitle title={post.title}></MainTitle>
    )
    // Main Post
    var postMain = (
      <Post title={post.title} content={post.content} key={post.id} createdAt={post.created_at} />
    );

    return (
      <div>
        { leftSidebar }
        <div className={"container pull-left hidden"} id={"container"}>
          { mainTitle }
          <div className={"main-content"}>
            { postMain }
          </div>
        </div>
      </div>
    );
  }
})
export default PostsIndex;
