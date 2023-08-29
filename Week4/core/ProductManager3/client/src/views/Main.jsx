import React, { useState } from 'react'
import Display from '../components/Display'
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [product,setProduct] = useState([])
    const removeFromDom = (ProductId)=>{
      setProduct(product.filter(one=>one._id != ProductId))
    }
  return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/>
        <Display product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>

    </div>
  )
}

export default Main