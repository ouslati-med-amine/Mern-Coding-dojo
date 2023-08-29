import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"


const UpdateProduct = (props) => {
  const {id} = useParams()
  const [Title,setTitle]=useState("")
  const [Price,setPrice]=useState()
  const [Description,setDescription]=useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res=>{
        setTitle(res.data.Title)
        setPrice(res.data.Price)
        setDescription(res.data.Description)
      })
      .catch(err=> console.log(err))
  },[])
  const Update =(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/product/${id}`,{
      Title,
      Price,
      Description
    })
    .then(res=>{
      console.log(res)
      navigate("/")
    })
  }
  return (
    <div>
        <h1>Edit a Product</h1>
        <form onSubmit={Update}>
            <label>Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
            <label>Price:</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
            <label>Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
            <button>Edit</button>
        </form>
    </div>
  )
}

export default UpdateProduct