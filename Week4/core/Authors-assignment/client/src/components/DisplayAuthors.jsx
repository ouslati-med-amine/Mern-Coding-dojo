import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const DisplayAuthors = () => {
    const [authors,setAuthors] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/Author")
            .then(res=>{
                setAuthors(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    const deleteOne = (AuthorId)=>{
        axios.delete(`http://localhost:8000/api/Author/${AuthorId}`)
        .then(res=>{
            setAuthors(authors.filter(one=>one._id != AuthorId))

        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <Link to={"/create"}>add an author</Link>
        <p>we have quotes by :</p>
        <table style={{border:"solid"}}>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((one,inx)=>{
                        return(
                            <tr key={inx}>
                                <th>{one.Name}</th>
                                <th> <Link to= {`/Update/${one._id}`}>edit</Link>
                                <button onClick={(e)=>deleteOne(one._id)}>delete</button></th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default DisplayAuthors