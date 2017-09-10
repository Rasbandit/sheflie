import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shelf extends Component {
  render() {
    const { shelfId } = this.props;

    return (
      <Link to={`/shelf/${shelfId}`} className="shelf-button">
        <h2>
          Shelf {shelfId}
        </h2>
      </Link>
    );
  }
}

export default Shelf;
