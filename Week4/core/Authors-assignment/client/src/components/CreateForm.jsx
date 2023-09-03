import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateForm = () => {
const[authors,setAuthors] = useState([])
const[Name,setName] = useState("")
const[errors,setErrors] = useState([])

const navigate = useNavigate()
const submit =(e)=>{
    e.preventDefault();
    axios.post(('http://localhost:8000/api/Author'),{
    Name
    })
    .then(res=>{
        console.log(res); 
        console.log(res.data);
        setAuthors(res.data)
    })
    .catch(err=>{
        console.log(err.response.data.errors)
        setErrors(err.response.data.errors);
})
    setName("")
    // navigate('/')
}

  return (
    <div>
        <Link to={"/"}>Home</Link>
        <p>add a new author :</p>
        <form onSubmit={submit}>
        {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            <label>Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={Name} />
            { errors.Name ? 
                        <p>{errors.Name.message}</p>
                        : null
                    }
            <button>submit</button>
        </form>
        <button onClick={()=>navigate('/')}>cancel</button>

    </div>
  )
}

export default CreateForm