import React, { useState } from 'react'

const DisplayBox = (props) => {
const{BoxArray}=props
return (
    <div>
        {
            BoxArray.map((color,index)=>{
                return(
                    <div style={{backgroundColor:color}} className='a' key={index}></div>
                )
            })
        }

    </div>
)

}

export default DisplayBox