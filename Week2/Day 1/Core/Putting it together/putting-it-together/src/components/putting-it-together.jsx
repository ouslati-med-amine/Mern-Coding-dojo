import React,{useState} from 'react'

const PersonalCard = (props) => {
    const { firstName, lastName, age, hairColor } = props
    const [ageup, setAgeup] = useState(age)
    const up = ()=>{
        setAgeup( ageup + 1);
    }
    return (
    <div>
        <h1>{firstName},{lastName}</h1>
        <p> Age : {ageup}</p>
        <p>Hair Color : {hairColor}</p>
        <button onClick={(up)}>Birthday button for {firstName} {lastName}</button>
    </div>
    )
}

export default PersonalCard
