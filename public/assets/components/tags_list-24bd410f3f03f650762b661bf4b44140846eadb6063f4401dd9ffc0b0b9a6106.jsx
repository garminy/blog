/* Tags list in left sidebar */
var TagsList = React.createClass({
  render: function() {
    return (
      <div className={"side-detail"} id={"tags_bar"}>
        <div className={"sidebar-title"}>
          <h3 className={"pull-left"}>
            标签 / Tags
          </h3>
          <div className={"clear"}></div>
        </div>
        <Tags tags={this.props.tags} />
      </div>
    );
  }
})
