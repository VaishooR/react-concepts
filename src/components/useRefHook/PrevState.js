import React, { useEffect, useRef, useState } from 'react'

const PrevState = () => {

    const[inputVal,setinputVal] = useState("");
    const prevRef = useRef("");

    useEffect(()=>{
        prevRef.current = inputVal;
    },[inputVal])
  return (
    <div className="m-10">
        <input onChange={(e)=>{setinputVal(e.target.value)}} value={inputVal} className='border border-black p-2'/>
        <p>Current Value : {inputVal}</p>
        <p>Prev Value : {prevRef.current}</p>
    </div>
  )
}

export default PrevState