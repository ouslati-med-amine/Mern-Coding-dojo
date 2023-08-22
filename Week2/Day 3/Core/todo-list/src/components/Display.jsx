import React from 'react'

const Display = (props) => {
    const submit =(e)=>{
        e.preventDefault()
    }
return (
    <div>
        {
            props.msg.map((one,index)=>{
                return(
                    <div key={index}>
                        <form onSubmit={submit}>
                        <p>{one}</p>
                        <input type="checkbox" />
                        <button>delete</button>
                        </form>
                    </div>
                )
            })
        }
    </div>
)
}

export default Display