import React from 'react';
import { Link } from 'react-router';

const Tags = React.createClass({
  render: function() {
    var tags = this.props.tags;
    var tagNodes = tags.map(function(tag) {
      return (
        <Link to={`/posts/tags/${tag.name}`} className="side-tag" key={tag.name}>
          <div className="side-tag-name">
            { tag.name }
          </div>
          <div className="side-tag-count">
            { tag.taggings_count }
          </div>
          <div className="clear"></div>
        </Link>
      );
    });

    return (
      <div className="sidebar-tags">
        { tagNodes }
      </div>
    );
  }
});

export default Tags;
