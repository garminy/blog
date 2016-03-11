// .main-title
var MainTitle = React.createClass({
  getInitialState: function() {
    return {
      data: {}
    }
  }, 
  render: function() {
    return (
      <div className={"main-title"} id={"main_title"}>
        <i className={"sidebar-return ion-grid"} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
});
