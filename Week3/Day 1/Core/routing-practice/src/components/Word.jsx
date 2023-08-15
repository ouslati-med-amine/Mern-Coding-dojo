import React from 'react'
import {useParams} from 'react-router-dom'

const Word = (props) => {
const {setWord}=useParams()
  return (
    <div>
        <p>the word is : {setWord}</p>
    </div>
  )
}

export default Word