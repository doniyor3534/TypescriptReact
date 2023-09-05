import React,{useContext} from 'react'
import { UserContext } from './UserContextT'

export default function UserContextfun() {
    const usercontext = useContext(UserContext)
    const handlelogin=()=>{
        usercontext?.setUser(
           {
            name:'Doniyorbek',
            email:'doniyorbektursunov800@gmail.com'
           }
        )
    }
    
    const handlelogout=()=>{
        usercontext?.setUser(null)
    }
  return (
    <div>
        <button onClick={handlelogin}>login</button>
        <button onClick={handlelogout}>logout</button>
        <h2>user name is ..{usercontext?.User?.name}</h2>
        <h2>user email is {usercontext?.User?.email}</h2>
    </div>
  )
}
