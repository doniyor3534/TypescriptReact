import React from 'react'

type personType={
    names:{
        name:string
        fristname:string
    }
}

export default function Person(props:personType) {
  return (
    <div>
        <h1>{props.names.name}</h1>
        <h1>{props.names.fristname}</h1>
    </div>
  )
}
