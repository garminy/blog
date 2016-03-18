import React from 'react';

var Post = React.createClass({
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
// var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  // hasProp = {}.hasOwnProperty;

// this.Post = (function(superClass) {
//   extend(Post, superClass);
// 
//   function Post() {
//     return Post.__super__.constructor.apply(this, arguments);
//   }
// 
//   Post.propTypes = {
//     title: React.PropTypes.string,
//     content: React.PropTypes.string,
//     created_at: React.PropTypes.string
//   };
// 
//   Post.prototype.render = function() {
//     var ret;
//     ret = 
//      <div className={"show-post"} id={"show_post"}>
//         <h2 className={"post-title"}>{ this.props.title }</h2>
//         <div className={"post-extra"}>
//           <div className={"author-info"}>
//             <i className={"ion-person"} />
//             <span className={"post-date"}>王若愚Max 发表于 { this.props.createdAt }</span>
//           </div>
//           <div className={"tags-info"}>
//             <i className={"ion-pricetags"} />
//           </div>
//         </div>
//         <div className={"post-content"}>{ this.props.content }</div>
//       </div>
//     ;
//     return ret;
//   };
// 
//   return Post;
// 
// })(React.Component);
