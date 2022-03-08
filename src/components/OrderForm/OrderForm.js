import React, { Component } from 'react';

class OrderForm extends Component {
  //removed props from constructor -see if need?, if so may need in super
  constructor() {
    super();
    // this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      showError: false
    };
  }

  handleNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value}) 
  }

  handleIngredientChange =(event) => {
    event.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, event.target.name]})
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.name === ''  || this.state.ingredients.length === 0) {
      this.setState({showError: true})
    } else {
    const newName = {
      id: Date.now(),
      ...this.state
    }
    this.props.addName(newName)
    const newIngredient = {
      ...this.state
    }
    this.props.addIngredient(newIngredient)
    this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({
    name: '', 
    ingredients: [],
    showError: false
  });
  }

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
        {this.state.showError && <p>Please make sure the form is filled out with both name and an ingredient.</p>}
      </form>
    )
  }
}

export default OrderForm;
