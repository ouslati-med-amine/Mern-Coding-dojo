import React, {useState} from 'react'
import './Box.css'

const Box = (props) => {
const [color, setColor] = useState("")
const {BoxArray, setBoxArray}= props
const submitting =(e)=>{
    e.preventDefault()
    console.log(color)
    setBoxArray([...BoxArray, color])
    setColor("")
    
}
return (    
    <div>
        <form onSubmit={submitting}>
            <label>color</label>
            <input type="text" onChange={(e)=>setColor(e.target.value)} value={color} />
            <button >add</button>
        </form>
    </div>
    )
}

export default Box