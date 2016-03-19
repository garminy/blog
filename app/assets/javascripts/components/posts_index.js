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

  _fetchData: function(nextProps) {
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

  componentWillReceiveProps: function(nextProps) {
    this._fetchData(nextProps);
    return true;
  },

  componentDidMount: function() {
    $.bind_left_sidebar();
    this._fetchData(this.props);
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
      <Post post={post} />
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
