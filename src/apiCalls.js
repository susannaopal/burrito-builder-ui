export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}


// export const postOrder = (newName) => {
//     return fetch('http://localhost:3001/api/v1/orders', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: newName.name
//         //, need comma above after name => ingredients: ??? it is am array so how to pass and what?
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

// {name: <String>, ingredients: <Array of Strings>}