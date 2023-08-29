import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Detail = (props) => {
  const {id} = useParams()
    const [oneProduct,setOneProduct] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h1>{oneProduct.Title}</h1>
        <p>Price:${oneProduct.Price}</p>
        <p>Description:{oneProduct.Description}</p>
    </div>
  )
}

export default Detail