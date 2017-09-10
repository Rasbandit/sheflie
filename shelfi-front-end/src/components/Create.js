import React, { Component } from 'react';
import { getShelf, createItem } from './../Services/service';

class Create extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      price: 0,
      img: '',
    };
  }

  handleName(name) {
    this.setState({
      name
    });
  }

  handleImg(img) {
    this.setState({
      img
    });
  }

  handlePrice(price) {
    this.setState({
      price
    });
  }

  createItem() {
    let id = 1;
    getShelf(this.props.match.params.id).then((bins) => {
      for (let i = 0; i < bins.length; i += 1) {
        if(i + 1 !== bins[i].id.split('')[1].toString()) {
          id = this.props.match.params.id + (i + 1);
          i = Infinity;
        }
      }
      createItem(this.state, id).then(() => {
        this.setState({
          name: '',
          price: 0,
          img: '',
        });
      });
    });
  }

  render() {
    return (
      <div>
        name<input value={this.state.name} onChange={(e) => { this.handleName(e.target.value); }} type="text" />
        img<input value={this.state.img} onChange={(e) => { this.handleImg(e.target.value); }} type="text" />
        price<input value={this.state.price} onChange={(e) => { this.handlePrice(e.target.value); }} type="text" />
        <button onClick={() => { this.createItem(); }}>Save</button>
      </div>
    );
  }
}

export default Create;
