import React, { Component } from 'react';
import logo from '../logo.png';
import { getShelf } from './../Services/service';
import { Link } from 'react-router-dom';

class ShelfPage extends Component {
  constructor() {
    super();

    this.state = {
      bins: []
    };
  }

  componentDidMount() {
    getShelf(this.props.match.params.id)
      .then((bins) => {
        this.setState({
          bins
        });
      });
  }


  render() {
    const { id } = this.props.match.params;

    const BINS = this.state.bins.map(bin => (
      <Link key={bin.id} to={`/bin/${bin.id}`} className="shelf-button">
        <h2>
          Bin {bin.id.split('')[1]}
        </h2>
      </Link>
    ));

    return (
      <div>
        <div className="banner">
          <img src={logo} alt="logo" />
          <div>
            <h1>shelf {id}</h1>
          </div>
        </div>
        <div className="shelfs">
          {BINS}
          <Link to={`/create/${id}`} className="shelf-button">
            <h2>
              Create Bin
            </h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShelfPage;

