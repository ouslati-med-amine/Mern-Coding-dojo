import React from 'react'
import {useParams} from 'react-router-dom'
const Mix = () => {
    const{setWord,setColor,setBackgroundCalor}=useParams()
  return (
    <div>
        <p style={{color:setColor,backgroundColor:setBackgroundCalor}}>the word is : {setWord}</p>
    </div>
  )
}

export default Mix