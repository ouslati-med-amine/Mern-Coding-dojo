import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Display = (props) => {
    const {product,setProduct,removeFromDom} = props
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    const deleteOne = (ProductId)=>{
        axios.delete(`http://localhost:8000/api/product/${ProductId}`)
        .then(res=>{
            removeFromDom(ProductId)
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        {
            product.map((one)=>{
                return(
                    <div>
                        <Link to={`/product/${one._id}`}>{one.Title}</Link>
                        <Link to={`/product/edit/${one._id}`}>Edit</Link>
                        <button onClick={(e)=>deleteOne(one._id)}>delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Display