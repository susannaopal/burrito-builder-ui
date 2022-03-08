import React from 'react';
import './Card.css'

const Card = ({id, name, ingredients}) => {
  return (
   <div className="card">
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

