// 必须要页面加载完成后，才能使用ReactJS
var Posts = React.createClass({
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
