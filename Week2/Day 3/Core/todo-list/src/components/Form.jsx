import React, { useState } from 'react'

const Form = (props) => {
    const [task,setTask]=useState("")
    const{message,setMessage}=props
    const submit =(e)=>{
        e.preventDefault()
        setMessage([...message,task])
        setTask("")
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default Form