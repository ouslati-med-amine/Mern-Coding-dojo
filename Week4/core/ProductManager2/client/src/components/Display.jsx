import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Display = (props) => {
    const {product,setProduct} = props
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {
            product.map((one)=>{
                return(
                    <div>
                        <Link to={`/product/${one._id}`}>{one.Title}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Display