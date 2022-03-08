import React, { Component } from 'react';

class OrderForm extends Component {
  //removed props from constructor -see if need?, if so may need in super
  constructor() {
    super();
    // this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = (event) => {
    // console.log("is my name here?", event.target.name)
    this.setState({ [event.target.name]: event.target.value})
    
  }

  handleSubmit = e => {
    e.preventDefault();
    const newName = {
      id: Date.now(),
      ...this.state
    }
    this.props.addName(newName)
    // this.clearInputs();
  }

  // clearInputs = () => {
  //   this.setState({name: '', ingredients: []});
  // }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
