import React from 'react'

type LitstProps ={
    items:string[] | number[]
    onClick:(value:string | number)=>void
}


export default function Lists({items,onClick}:LitstProps) {
  return (
    <div>
        <h2>Items of Lists</h2>
        {items.map((item,index)=>{
            return(
                <div key={index} onClick={()=>onClick(item)}>
                    {item}
                </div>
            )
        })}
    </div>
  )
}
