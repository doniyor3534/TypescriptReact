import React from 'react'

type hendleprops={
    hendlecklick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}


export default function Button(props:hendleprops) {
  return (
    <button onClick={(e)=>props.hendlecklick(e,2)} >Button</button>
  )
}
