import React from 'react'
import Listing from './Listing'

function App() {
  const data = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 21.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
      id: 3,
      title: "Powder Canister",
      price: 14.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
      id: 4,
      title: "Red Lipstick",
      category: "beauty",
      price: 12.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
      id: 5,
      title: "Red Nail Polish",
      category: "beauty",
      price: 8.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
      id: 6,
      title: "Red Nail Polish",
      category: "beauty",
      price: 200.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    }
  ]


  const tableRow = data.map((data, index) => {
    return <Listing key={data.id} num={index} image={data.thumbnail} price={data.price} title={data.title} />
  })

 


  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">img</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Final</th>
          </tr>
        </thead>
        <tbody>
          {
            tableRow
          }


        </tbody>
      </table>

    </div>

  )
}


export default App
