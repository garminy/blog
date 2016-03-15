/* Post in category */
var CategoryPost = React.createClass({
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
