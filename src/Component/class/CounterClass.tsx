import {Component} from 'react'

type MessageProps={
  message:string
}
type CounterProps={
  count:number
}

// ////////////////////////////////////////////////////////////
export class Counter extends Component<MessageProps , CounterProps> {
  state={
     count:0
  }
 
  handeclick=()=>{
     this.setState((prevstate)=>({count:prevstate.count +1}))
  }

  render(){
    return (
       <>
          <button onClick={this.handeclick} >Incriment</button>
          <h1>{this.props.message} {this.state.count}</h1>
       </>
    )
  }






}




