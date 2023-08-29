import React, { useState } from 'react'
import Display from '../components/Display'
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [product,setProduct] = useState([])

  return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/>
        <Display product={product} setProduct={setProduct}/>
    </div>
  )
}

export default Main