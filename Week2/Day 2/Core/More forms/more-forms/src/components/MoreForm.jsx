import {useState} from 'react'

const MoreForm = (props) => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [error1, setError1] = useState("")
    const [error2, setError2] = useState("")
    const [error3, setError3] = useState("")
    const [error4, setError4] = useState("")
    const [error5, setError5] = useState("")


    const submitting=(e)=>{
        e.preventDefault()
        console.log(password)
        console.log(confirmPassword)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        if(password!==confirmPassword){
            setError4("passwords must be match")
        }
        else if (password===confirmPassword){
            setError4("")
        }
        
    }
  return (
    <div>
        <form onSubmit={submitting} className='all'>
            <div className='block'>
                <label>First Name : </label>
                <input type="text" onChange={(e)=>{
                setFirstName(e.target.value);
                if(firstName.length < 1){
                    setError1(" first name should be at least more than 2")
                }
                else{
                    setError1("")
                }
                } } value={firstName} />
                {
                error1 ?
                <p>{error1}</p> :
                ''
                }
            </div>
            <div className='block'> 
                <label>Last Name : </label>
                <input type="text" onChange={(e)=>{
                setLastName(e.target.value);
                if(lastName.length < 1){
                    setError2(" Last name should be at least more than 2")
                }
                else{
                    setError2("")
                }
                
                }}  value={lastName}/>
                {
                    error2 ?
                    <p>{error2}</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Email : </label>
                <input type="email" onChange={(e)=>{
                    setEmail(e.target.value)
                    if(email.length < 4){
                        setError5(" email should be at least 5")
                    }
                    else{
                        setError5("")
                    }
                    }} value={email}/>
                    {
                    error5 ?
                    <p>{error5}</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Password : </label>
                <input type="password" onChange={(e)=>{
                    setPassword(e.target.value)
                    if(password.length<7){
                        setError3('your password should be at least 8 characters')
                    }
                    else{
                        setError3('')
                    }
                }} value={password}/>
                {
                    error3 ?
                    <p>{error3}</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Confirm password : </label>
                <input type="password" onChange={(e)=>{
                    setConfirmPassword(e.target.value)

                    }} value={confirmPassword}/>
                    {
                        error4?
                        <p>{error4}</p> :
                        ''
                    
                    }
            </div>
            <input type="submit" value= "submit" />
        </form>
    </div>
  )
}

export default MoreForm