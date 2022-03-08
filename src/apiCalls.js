export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}


export const postOrder = (newName, newIngredient) => {
    return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify({
        name: newName.name,
        ingredients: newIngredient.ingredient
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

// {name: <String>, ingredients: <Array of Strings>}