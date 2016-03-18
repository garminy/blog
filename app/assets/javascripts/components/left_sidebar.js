/* .left-sidebar */
/*
 * props
 *  @params posts
 *  @params tags
 * */
import React from 'react';
import Category from './category';
import TagsList from './tags_list';

const LeftSidebar = React.createClass({

  render: function() {
    return (
      <div className={"left-sidebar"} id={"left_sidebar"}>
        <div className={"icons-bar-placeholder pull-left"}></div>
        <div className={"icons-bar"} id={"icons-bar"}>
          <div className={"icon-items"}>
            <div className={"icon-item chosen"} id={"icon_articles"}>
              <i className={"ion-ios-book-outline icon-article"}></i>
            </div>
            <div className={"icon-item"} id={"icon_tags"}>
              <i className={"ion-ios-pricetags-outline icon-tag"}></i>
            </div>
          </div>
        </div>
        <div className={"side-details"}>
          <div className={"mask"} id={"mask"}></div>
          <Category posts={this.props.posts} />
          <TagsList tags={this.props.tags} />
        </div>
      </div>
    );
  }
  
})

export default LeftSidebar;
