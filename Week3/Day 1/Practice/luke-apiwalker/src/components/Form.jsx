import React, { useState } from 'react'
import StarWors from './StarWors'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate =useNavigate()
    const[id,setId] =useState(0)
    const submit =(e)=>{
        e.preventDefault()
        navigate("/people/" + id)
    }
  return (
    <div>
        <form onSubmit={submit}>
            <label>search for :</label>
            <select>
                <option value={StarWors}>people</option>
                <option >planets</option>
            </select>
            <label>iD</label>
            <input type="number" onChange={(e)=>setId(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Form