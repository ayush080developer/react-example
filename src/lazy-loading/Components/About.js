import React, {useEffect, useState} from 'react';
const About = () => {
    const [user, setUser] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=> response.json())
        .then(json => setUser(json)); 
    },[])

    const getUserDetails = user.map((value, index)=> { 
        return (
            <div key={index}>
                {value.title}
            </div>
        )
    })
    return (
        <>
            <h1>About</h1>
            {getUserDetails} 
        </>   
    )
} 
export default About;