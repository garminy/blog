import React from 'react';
const Tags = React.createClass({
  render: function() {
    var tags = this.props.tags;
    var tagNodes = tags.map(function(tag) {
      return (
        <a href={tag.url} className={"side-tag"} key={tag.name}>
          <div className={"side-tag-name"}>
            { tag.name }
          </div>
          <div className={"side-tag-count"}>
            { tag.taggings_count }
          </div>
          <div className={"clear"}></div>
        </a>
      );
    });

    return (
      <div className={"sidebar-tags"}>
        { tagNodes }
      </div>
    );
  }
});

export default Tags;
