import { type } from "os";
import { createContext, useState } from "react";
 
type AuthUser = {
    name:string 
    email:string 
}
type userType={
    User:AuthUser | null 
    setUser:React.Dispatch<React.SetStateAction< AuthUser | null>>
}

type UserContectProps={
    children:React.ReactNode
}

export const UserContext = createContext({} as userType)


export const UserContextProvider =({children}:UserContectProps)=>{
    const [User, setUser] = useState<AuthUser | null> (null)
    return(
        <UserContext.Provider value={{User,setUser}}>
             {children} 
        </UserContext.Provider>
    )
}