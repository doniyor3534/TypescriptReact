import {useState} from 'react'

export default function LogendIn() {

    const [islogged, setislogged] = useState(false)

    const handleLogin=()=>{
        setislogged(true)
    }
    const handleLogout=()=>{
        setislogged(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User in {islogged ? 'logged in':' logged out'}</div>
    </div>
  )
}
