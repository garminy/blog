/* 主要展示区域 */
import React from 'react';
import LeftSidebar from './left_sidebar';
import MainTitle from './main_title';
import Post from './post';

const PostShow = React.createClass({
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
      url: "/posts/" + this.props.params.id + ".json", 
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("postShow Ajax data: ", data)
        that.setState({
          data: data
        });
      },
      error: function(xhr, status, err) {
        return console.error(this.props.url, status, err.toString());
      }
    });
  }, 

  componentDidUpdate: function() {
    $.bind_left_sidebar();
  }, 

  componentWillReceiveProps: function() {
    console.log("PostShow will receive props!")
    this._fetchData();
    return true;
  }, 

  /* 加载组件 */
  componentDidMount: function() {
    console.log('== PostShow Mounted ==');
    this._fetchData();
  }, 

  render: function() {
    console.log('== PostShow rendered ==');
    // variables
    var post = this.state.data.post;

    // left-sidebar
    var leftSidebar = (
      <LeftSidebar posts={this.state.data.posts} tags={this.state.data.tags} />
    );

    // .main-title
    var mainTitle = (
      <MainTitle title={post.title} />
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

export default PostShow;
