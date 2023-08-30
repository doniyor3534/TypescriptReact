import React from 'react'

type Statuspropstype={
    status:'loading' | 'successfuly' | 'error'
}

export default function Status(props:Statuspropstype) {
let message
if(props.status==='loading'){
    message= 'Loading...'
}else if(props.status==='successfuly'){
    message = 'Data fetch successfuly'
}else if(props.status==='error'){
    message='Error fetching data'
}

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}
