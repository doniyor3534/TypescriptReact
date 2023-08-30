import React from 'react'

type personlistType={
    data: {
        name: string;
        fristname: string;
    }[]
}
export default function PersonList(props:personlistType) {
  return (
    <div>
        {
          props.data.map((item,i)=>(
            <div key={i}>
                <h1>{item.name}</h1>
                <h2>{item.fristname}</h2>
            </div>
          ))
        }
    </div>
  )
}
