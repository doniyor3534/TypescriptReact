
type greetprops={
    name:string
    count?:number
    islogdenin?:boolean
}

export default function Greet(props:greetprops) {
  return (
    <div>
        <h1>
          {
          props.islogdenin ? `Welcome ${props.name} !  You have ${props.count} unread messages`
          :'welcom to islogdenin ?'   
        }
        </h1>
    </div>
  )
}
