import React from 'react'
import Login from './Login'
import { PropsNameType } from './Profile'

type PriviteProps ={
    islogdenin:boolean 
    component:React.ComponentType<PropsNameType>
}

export default function Private({islogdenin,component:Component}:PriviteProps) {
    if(islogdenin){
        return <Component name='Doniyorbek' />
    }else{
        return <Login/>
    }
}
