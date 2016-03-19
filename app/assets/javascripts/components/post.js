import React from 'react';

var Post = React.createClass({
  componentWillReceiveProps: function() {
    // remove the loading mask at main post area
    $('#show_post').remove_mask();
  }, 

  render: function() {
    return (
      <div className={"show-post"} id={"show_post"}>
        <h2 className={"post-title"}>{ this.props.title }</h2>
        <div className={"post-extra"}>
          <div className={"author-info"}>
            <i className={"ion-person"} />
            <span className={"post-date"}>王若愚Max 发表于 { this.props.createdAt }</span>
          </div>
          <div className={"tags-info"}>
            <i className={"ion-pricetags"} />
          </div>
        </div>
        <div className={"post-content"}>{ this.props.content }</div>
      </div>
    )
  }
})

export default Post;
