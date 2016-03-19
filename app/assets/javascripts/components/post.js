import React from 'react';

var Post = React.createClass({
  componentWillReceiveProps: function() {
    // remove the loading mask at main post area
  }, 

  render: function() {
    var post = this.props.post;
    return (
      <div className={"show-post"} id={"show_post"}>
        <h2 className={"post-title"}>{ post.title }</h2>
        <div className={"post-extra"}>
          <div className={"author-info"}>
            <i className={"ion-person"} />
            <span className={"post-date"}>王若愚Max 发表于 { post.created_at }</span>
          </div>
          <div className={"tags-info"}>
            <i className={"ion-pricetags"} />
            { post.tag_list }
          </div>
        </div>
        <div className={"post-content"}>{ post.content }</div>
      </div>
    )
  }
})

export default Post;
