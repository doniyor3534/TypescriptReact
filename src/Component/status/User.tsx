import React, { useState } from 'react'

type AuthUser={
    name:string
    email:string
}

export default function User() {
    const [user, setuser] = useState<AuthUser | null>(null)
    const handlelogin=()=>{
        setuser({
            name:'Vishvase',
            email:'vesvasi@gmail.com'
        })
    }
    const handlelogout=()=>{
        setuser(null)
    }
  return (
    <div>
        <button onClick={handlelogin}>login</button>
        <button onClick={handlelogout}>logout</button>
        <h2>User name is {user?.name}</h2>
        <h2>User email is {user?.email} </h2>
    </div>
  )
}
