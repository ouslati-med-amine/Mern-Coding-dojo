import axios from 'axios'
import React, { useState } from 'react'

const ProductForm = (props) => {
    const {product,setProduct} = props

    const [Title,setTitle]=useState("")
    const [Price,setPrice]=useState()
    const [Description,setDescription]=useState("")
    const submit =(e)=>{
        e.preventDefault();
        axios.post(('http://localhost:8000/api/product'),{
            Title,
            Price,
            Description,
        })
        .then(res=>{
            console.log(res); 
            console.log(res.data);
            setProduct([...product,res.data])
        })
        .catch(err=>console.log(err))
        setTitle("")
        setPrice("")
        setDescription("")
    }
  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={submit}>
            <label>Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
            <label>Price:</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
            <label>Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
            <button>create</button>
        </form>
        <hr />
    </div>
  )
}

export default ProductForm