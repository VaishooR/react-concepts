import React, { useEffect, useRef } from 'react'

const AccessDOM = () => {
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div className="m-10">
        {/* focused */}
        <input ref={inputRef} type="text" className="border border-black"/>
        {/* not focused */}
        <input type="text" className="border border-black"/>
    </div>
  )
}

export default AccessDOM