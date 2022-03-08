import React, { Component } from 'react';
import './App.css';
// import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  // removing props from the constructor since not usually there (if an issue later then can bring back)
  constructor() {
    super();
    this.state = {
      orders: [
        {
          id: 1,
          name: 'Pat',
          ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
        }
      ]
    }
  }

  // componentDidMount() {
  //   getOrders()
  //   .then(data => this.setState({data => orders: data.orders}))
  //   .catch(err => console.error('Error fetching:', err));
  // }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
