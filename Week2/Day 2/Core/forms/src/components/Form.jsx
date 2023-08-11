import {useState} from 'react'
import "./Form.css"
const Form = (props) => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const submitting=(e)=>{
        e.preventDefault()
        console.log(password)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

  return (
    <div className='container'>
        <form onSubmit={submitting} className='all'>
            <div className='block'>
                <label>First Name : </label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className='block'> 
                <label>Last Name : </label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </div>
            <div className='block'>
                <label>Email : </label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className='block'>
                <label>Password : </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <div className='block'>
                <label>Confirm password : </label>
                <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            <button>Your form data</button>
        </form>
        <div className='block2'>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <p>Confirm Password : {confirmPassword}</p>
        </div>
    </div>
  )
}

export default Form