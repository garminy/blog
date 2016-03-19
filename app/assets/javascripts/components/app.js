import React from 'react';
import { Link } from 'react-router'

const App = React.createClass({
  componentDidMount: function() {
    if (window.location.hash.startsWith('#/?_k=')) {
      let url = location.protocol + "//" + location.host + "/" + $('#to_posts').attr("href");
      setTimeout(
        () => location.href = url
      , 3000);
    }
  }, 
  render: function(){
    var loading = window.location.hash.startsWith('#/?_k=') ? (
      <div className='center'>
        <Link to={`/posts`} className="access-link" id="to_posts">
          Welcome，欢迎进入博客!
        </Link>
      </div>
    ) : ( <div></div> );

    return (
      <div>
        { loading }
        {this.props.children}
      </div>
    );
  }
});

export default App;
