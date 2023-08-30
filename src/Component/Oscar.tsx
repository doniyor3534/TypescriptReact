import React from 'react'

type oscarprops={
    children:React.ReactNode
}

export default function Oscar(props:oscarprops) {
  return (
    <div>{props.children}</div>
  )
}
