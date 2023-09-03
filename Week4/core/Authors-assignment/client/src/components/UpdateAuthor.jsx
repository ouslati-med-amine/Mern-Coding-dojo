import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateAuthor = () => {
    const {id} = useParams()
    const [Name,setName]=useState("")
    const[errors,setErrors] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/Author/${id}`)
        .then(res=>{
        setName(res.data.Title)
        })
        .catch(err=> console.log(err))
    },[])
    const Update =(e)=>{
      e.preventDefault()
      axios.put(`http://localhost:8000/api/Author/${id}`,{
        Name,
      })
      .then(res=>{
        console.log(res)
        // navigate("/")
      })
      .catch(err=>{
        setErrors(err.response.data.errors);
      })
    }
  return (
    <div>
        <p>Edit this author :</p>
        <form onSubmit={Update}>
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

export default UpdateAuthor