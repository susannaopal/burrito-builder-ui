export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}


export const postOrder = (newFoodOrder) => {
    return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify({
        name: newFoodOrder.name,
        ingredients: newFoodOrder.ingredients
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

