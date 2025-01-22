import React, { useEffect, useState } from 'react'
import Inputs from './Inputs'
import Display from './Display'

export default function App() {
  
  const [name, Setname] = useState("");
  const [movies, Setmovies] = useState([]);


  async function getMovies() {
    let APIURL =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    if (name != "") {
      APIURL = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`
    }

    const responce = await fetch(APIURL);
    const data = await responce.json();
    Setmovies(data.results)
    console.log(data.results)

  }

  useEffect(
    () => {
      getMovies()
    },
    [name]  
  )



  function nameHandler(value) {
    Setname(value)
  }


  return (
    <>
      <Inputs placeHolder="Search Movies..." ChangeHandler={nameHandler} />

      <Display movies={movies} />
    </>
  )
}


