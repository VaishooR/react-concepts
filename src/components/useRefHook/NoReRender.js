import React, { useRef, useState } from 'react'

const NoReRender = () => {
    const [counter,setCounter] = useState(0);
    const refCounter = useRef(0);
    console.log("Component Rendering...");
  return (
    <div className="m-10">
        <p>Counter = {counter}</p>
        <p>Ref-Counter = {refCounter.current} </p>
        <button onClick={()=>setCounter(counter+1)} className='my-2 p-2 bg-orange-400'>Increase State</button>
        <button onClick={()=>refCounter.current++} className='my-2 p-2 bg-green-400'>Increase Ref</button>
    </div>
  )
}

export default NoReRender