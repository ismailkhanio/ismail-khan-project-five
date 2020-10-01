import React, { Component } from 'react';

// in case there is a page not found when the route is incorrect
class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h3>page not found</h3>
      </div>
    );
  }
}

export default PageNotFound;