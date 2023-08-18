import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const StarWors = () => {
    const navigate =useNavigate()
    const[id,setId] =useState(0)
    const submit =(e)=>{
        e.preventDefault()
        navigate("/people/" + id)
    }
    const {idpeople}=useParams()
    const [people,setPeople]=useState([])
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${idpeople}`)
        .then(res=>{
            console.log(res.data)
            setPeople([res.data])
        })
        .catch(err=>{
            console.log(err)
            navigate("/error")
        })
    },[submit])
    
  return (
    <div>
                <form onSubmit={submit}>
            <label>search for :</label>
            <select>
                <option value={StarWors}>people</option>
                <option >planets</option>
            </select>
            <label>iD</label>
            <input type="number" onChange={(e)=>setId(e.target.value)}/>
            <button>Search</button>
        </form>
        {
            people.map((one)=>{
                return(
                    <div>
                        <h1>{one.name}</h1>
                        <p>Height:{one.height}</p>
                        <p>Hair color:{one.hair_color}</p>
                        <p>Eye Color:{one.eye_color}</p>
                        <p>Skin Color:{one.skin_color}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default StarWors