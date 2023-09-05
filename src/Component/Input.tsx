import React from 'react'
type inputprops={
    value:string
    changehandle:(event:React.ChangeEvent<HTMLInputElement>)=>void
}



export default function Input({value,changehandle}:inputprops) {
   
  return (
    <input type="text" value={value} onChange={changehandle} />
  )
}

