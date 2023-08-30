import React from 'react'
type inputprops={
    value:string
    changehandle:(event:React.ChangeEvent<HTMLInputElement>)=>void
}



export default function Input(props:inputprops) {
   
  return (
    <input type="text" value={props.value} onChange={props.changehandle} />
  )
}

