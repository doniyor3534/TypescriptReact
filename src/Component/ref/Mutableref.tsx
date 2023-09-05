import { useState,useEffect,useRef } from "react"

export default function Mutableref() {
    const [time, settime] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const stopTRimer =()=>{
      if(intervalRef.current) window.clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        intervalRef.current = window.setInterval(()=>{
             settime((timer)=>timer +1)
        },1000)
        return ()=>{
          stopTRimer()
        }
    },[])
  return (
    <div>
        <h1>HookTimer -- {time}--</h1>
        <button onClick={()=>stopTRimer()} >Stop timeng</button>
    </div>
  )
}
