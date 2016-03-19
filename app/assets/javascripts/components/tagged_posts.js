/* 主要展示区域 */

import React from 'react';
import LeftSidebar from './left_sidebar';
import MainTitle from './main_title';
import Post from './post';
import SearchPosts from './search_posts';

const TaggedPosts = React.createClass({
  getInitialState: function() {
    return {
      data: {
        posts: [], 
        preview_posts: [], 
        tags: [], 
        tag: {}
      }
    }
  }, 

  _fetchData: function(nextProps) {
    var that = this;
    return $.ajax({
      url: `/posts/tags/${nextProps.params.tag}.json`, 
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
  },

  componentDidMount: function() {
    $.bind_left_sidebar();
    this._fetchData(this.props);
  }, 

  componentDidUpdate: function() {
    $.setup_styles();
  }, 

  render: function() {
    var tag = this.state.data.tag;

    // left-sidebar
    var leftSidebar = (
      <LeftSidebar posts={this.state.data.preview_posts} tags={this.state.data.tags} />
    );

    // .main-title
    var mainTitle = (
      <MainTitle title={tag.name}></MainTitle>
    )
    // Main Post
    var postsMain = (
      <SearchPosts posts={this.state.data.posts} />
    );

    return (
      <div>
        { leftSidebar }
        <div className={"container pull-left hidden"} id={"container"}>
          { mainTitle }
          <div className={"main-content"}>
            { postsMain }
          </div>
        </div>
      </div>
    );
  }
})

export default TaggedPosts;
