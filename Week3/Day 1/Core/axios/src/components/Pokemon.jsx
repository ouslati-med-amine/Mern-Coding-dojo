import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
  const [name,SetName]=useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response=>{
          console.log(response.data.results)
          SetName(response.data.results)
        })
        .catch(error=>{
          console.log(error)
        })
    },[])
  return (
    <ul>
      {
        name.map((one,index)=>{
          return(<li key={index}>{one.name}</li>)
        })
      }
    </ul>
  )
}

export default Pokemon