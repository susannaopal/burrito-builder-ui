import React from 'react';
import './Orders.css';
import Card from '../../components/Card/Card';


// const Orders = props => {
//   const orderEls = props.orders.map(order => {
//     return (
//       <div className="order">
//         <h3>{order.name}</h3>
//         <ul className="ingredient-list">
//           {order.ingredients.map(ingredient => {
//             return <li>{ingredient}</li>
//           })}
//         </ul>
//       </div>
//     )
//   });

//   return (
//     <section>
//       {/* { orderEls.length ? orderEls : <p>No orders yet!</p> } */}
//     </section>
//   )
// }

const Orders = ({orders}) => {
    const orderEls = orders.map((order, index) => {
      return (
        <Card 
          id={order.id}
          key={order.id}
          name={order.name}
          ingredients={order.ingredients}
        />
      )
    })
  return (
    <div className='order'>
      {orderEls}
    </div>
  )
}

export default Orders;

