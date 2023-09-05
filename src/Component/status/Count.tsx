import { useReducer } from "react";

type CounterType={
    count:number
}

type updateAction ={
    type:'incriment'|'decriment',
    payload:number
}

type resetaction={
    type:'reset'
}




const initialstate = {
    count:0
}

function reducer(state:CounterType,action:updateAction | resetaction) {
     switch (action.type) {
        case 'incriment':
               return {count:state.count + action.payload}
            break;
        case 'decriment':
               return {count:state.count>0?state.count - action.payload:0}
            break;
        case 'reset':
               return initialstate
            break;
     
        default:
            return state
            break;
     }
}


export default function Count() {
    const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
            <h1>Count state {state.count} </h1>
            <button onClick={()=>dispatch({type:'incriment',payload:10})} >incriment</button>
            <button onClick={()=>dispatch({type:'decriment',payload:10})}>decriment</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}
