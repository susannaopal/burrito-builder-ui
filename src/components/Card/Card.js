import React from 'react';
import './Card.css'

const Card = ({id, name, ingredients}) => {
  return (
   <div className="card">
     {/* <p>{id}</p> */}
      <h3>{name}</h3>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => 
        {
        return <li>{ingredient}</li>}
        )}
        </ul>
      </div>
  )
}

export default Card;

//error throwing because the list wants a unique key ?? hannah said for right now not an issue
//index.js:1 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Card`. See https://fb.me/react-warning-keys for more information.
//     in li (at Card.js:10)
//     in Card (at Orders.js:30)
//     in div (at Orders.js:39)
//     in Orders (at App.js:35)
//     in main (at App.js:30)
//     in App (at src/index.js:9)