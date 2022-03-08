import React from 'react';
import './Orders.css';
import Card from '../../components/Card/Card';

const Orders = ({orders}) => {
    const orderEls = orders.map((order) => {
      return (
        <div className='order'>
        <Card 
          id={order.id}
          key={order.id}
          name={order.name}
          ingredients={order.ingredients}
        />
        </div>
      )
    })
  return (
    <div className='order'>
      {orderEls}
    </div>
  )
}

export default Orders;

