/* category in left sidebar */
var Category = React.createClass({
  render: function() {
    var posts = this.props.posts;
    console.log('--------------')
    console.log(posts);
    return (
      <div className="side-detail" id="articles_bar">
        <div className="sidebar-title">
          <h3 className="pull-left">
            目录 / Category
          </h3>
          <div className="clear"></div>
        </div>
        <Posts posts={posts} />
      </div>
    );
  }
})
