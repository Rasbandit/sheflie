import React, { Component } from 'react';
import { getBin } from './../Services/service';
import logo from '../logo.png';

class Inventory extends Component {
  constructor() {
    super();

    this.state = {
      edit: false,
      inv: {},
      new: {}
    };
  }

  componentDidMount() {
    getBin(this.props.match.params.id).then((bin) => {
      this.setState({
        inv: bin,
        new: bin
      });
    });
  }


  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="banner">
          <div>
            <img src={logo} alt="logo" />
            <h2>Shelf {id.split('')[0]} </h2>
            <h2>Bin {id.split('')[1]} </h2>
          </div>
        </div>
        <div className="shelfs">
          <img src={this.state.inv.img} alt="" />
          name
          <input value={this.state.inv.name} type="text" />
          price
          <input value={this.state.inv.price} type="text" />
        </div>
      </div>
    );
  }
}

export default Inventory;
