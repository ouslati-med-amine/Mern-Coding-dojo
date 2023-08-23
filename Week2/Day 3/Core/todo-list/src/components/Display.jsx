import React from 'react'

const Display = (props) => {
    const{msg,setMessage}=props

const delite = (inx)=>{
    const filterMsg = msg.filter((one,index)=>{
        return inx !== index;

    })
    setMessage(filterMsg)
}
return (
    <div>
        {
            msg.map((one,index)=>{
                return(
                    <div key={index}>
                        <form >
                        <p>{one}</p>
                        <input type="checkbox" />
                        <button onClick={(e)=>{delite(index)}}>delete</button>
                        </form>
                    </div>
                )
            })
        }
    </div>
)
}

export default Display