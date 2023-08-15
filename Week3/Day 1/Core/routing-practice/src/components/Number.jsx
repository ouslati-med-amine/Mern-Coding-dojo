import React from 'react'
import {useParams} from 'react-router-dom'
const Number = (props) => {
    const {setNum} = useParams()
  return (
    <div>
        <p>the number is : {setNum}</p>
    </div>
  )
}

export default Number