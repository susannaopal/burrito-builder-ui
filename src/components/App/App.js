import React, { Component } from 'react';
import './App.css';
//need to add post too
import {getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: '',
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
    .then(data => this.setState({orders: data.orders}))
    .catch(err => console.error('Error fetching:', err));
  }

  addName = (newName) => {
    this.setState({ orders: [...this.state.orders, newName ]})
  }

  addIngredient = (newIngredient) => {
    this.setState({ orders: [...this.state.orders, newIngredient]})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addName={this.addName} addIngredient={this.addIngredient}/>
        </header>
        <Orders orders={this.state.orders} />
        {!this.state.orders.length && <p>No orders yet!</p>}
      </main>
    );
  }
}


export default App;
