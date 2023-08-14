import React, { useEffect, useState } from 'react'

const Pokemon = (props) => {
    const[pokemon,setPokemon]=useState([])
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response=>{
            return response.json()
        }
            )
        .then(response=>{
            console.log(response.results)
            setPokemon(response.results)
        }
            )
        .catch(err=>{
            console.log(err)
        })
    

    },[])
  return (
    <ul>
        {
            pokemon.map((name,index)=>{
                return(
                    <li key={index}>{name.name}</li>
                )
            })
        }
    </ul>
  )
}

export default Pokemon