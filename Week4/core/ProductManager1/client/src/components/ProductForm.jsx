import axios from 'axios'
import React, { useState } from 'react'

const ProductForm = () => {
    const [Title,setTitle]=useState("")
    const [Price,setPrice]=useState(0)
    const [Description,setDescription]=useState("")
    const submit =(e)=>{
        e.preventDefault();
        axios.post(('http://localhost:8000/api/product'),{
            Title,
            Price,
            Description,
        })
        .then(res=>{
            console.log(res); // always console log to get used to tracking your data!
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={submit}>
            <label>Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <label>Price:</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)}/>
            <label>Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            <button>create</button>
        </form>
    </div>
  )
}

export default ProductForm