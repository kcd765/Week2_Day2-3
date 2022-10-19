import React, { Component } from 'react';
import Functionlist from './Functionlist';
import './App.css'
import Classlist from './Classlist';

class App extends Component {
  state = {
    groceries: [{
      item: 'eggs',
      quantity: 10,
      price: 0.60
    }, {
      item: 'milk',
      quantity: 2,
      price: 3.10
    },
    {
      item: 'rice',
      quantity: 2,
      price: 10.20
    },
    {
      item: 'oil',
      quantity: 1,
      price: 7.40
    }],

    videos: [{
      title: 'Cats',
      length: 9.54,
      theme: 'Animals'
    }, {
      title: 'Cars',
      length: 10.55,
      theme: 'Vehicles'
    }, {
      title: 'ReactJS for Beginners',
      length: 30.32,
      theme: 'Programming'
    }, {
      title: 'Japanese Yen Weakens against the Dollar',
      length: 4.11,
      theme: 'News'
    }]
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <h1>Qn2</h1>
          <h3>Groceries</h3>
          <Functionlist data={this.state.groceries} />
        </div>

        <div className="column">
          <h1>Qn3</h1>
          <h3>Videos</h3>
          <Classlist data={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;