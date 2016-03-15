/* 主要展示区域 */

var PostsIndex = React.createClass({
  getInitialState: function() {
    return {
      data: {
        posts: [], 
        post: {}, 
        tags: []
      }
    }
  }, 

  componentDidMount: function() {
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

  render: function() {
    // variables
    console.log(this.state.data)
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

      // </div>
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
