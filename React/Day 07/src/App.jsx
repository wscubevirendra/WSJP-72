import React, { useState, useEffect } from "react";

import List from "./LisstItem";


export default function App() {
  const [recipes, Setrecipes] = useState([])
  

  const fetchProduct = async () => {
    const responce = await fetch("https://dummyjson.com/recipes");
    const data = await responce.json();
    Setrecipes(data.recipes)
  }

 

  useEffect(
    () => {
      fetchProduct()
    },
    []
  )




  return (
    <div className='container-fluid '>
      <div className="row ">
        {
          recipes.map((data, index) => {
            return (
              <List prod={data} i={index}  />
            )
          })
        }



      </div>

    </div>
  )
}


