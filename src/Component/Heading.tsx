import React from 'react'
type headingprops={
    children:string
}
export default function Heading(props:headingprops) {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}
