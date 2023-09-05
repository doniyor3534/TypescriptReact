import React, { useState } from 'react'

type AuthUser={
    name:string
    email:string
}

export default function User2() {
    const [user, setuser] = useState<AuthUser >({} as AuthUser)
    const handlelogin=()=>{
        setuser({
            name:'Vishvase',
            email:'vesvasi@gmail.com'
        })
    }

  return (
    <div>
        <button onClick={handlelogin}>login</button>
        <h2>User name is {user.name}</h2>
        <h2>User email is {user.email} </h2>
    </div>
  )
}
