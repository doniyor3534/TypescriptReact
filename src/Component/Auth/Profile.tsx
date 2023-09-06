import React from 'react'

export type PropsNameType={
    name:string
}


export default function Profile(props:PropsNameType) {
  return (
    <div>Profile {props.name}</div>
  )
}
