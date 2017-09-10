import React, { Component } from 'react';
import Shelf from './Shelf';
import logo from '../logo.png';

class HomePage extends Component {
  render() {
    const shelfs = ['A', 'B', 'C', 'D'].map(letter => (
      <Shelf
        key={letter}
        shelfId={letter}
      />
    ));
    console.log(shelfs);
    return (
      <div>
        <div className="banner">
          <div>
            <img src={logo} alt="logo" />
            <h1>shelfie</h1>
          </div>
        </div>
        <div className="shelfs">
          {shelfs}
        </div>
      </div>
    );
  }
}

export default HomePage;
