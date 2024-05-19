import React, { useRef, useState } from 'react'

const RefCounter = () => {
    let x = 0;
    const [ y,setY] = useState(0);
    const z = useRef(0);
    console.log(z)
  return (
    <div className="m-10">

        {/* NORMAL VARIABLE */}
        <div>
            <h1>x value is : {x}</h1>
            <button className='my-2 p-2 bg-orange-400'
            onClick={()=>{
                x = x + 1;
                console.log('X = ',x);
            }}>Increase X</button>
        </div>

        {/* STATE VARIABLE */}
        <div>
            <h1>y value is : {y}</h1>
            <button className='my-2 p-2 bg-orange-400' onClick={()=>{setY(y+1)}}>Increase Y</button>
        </div>

        {/* REF VARIABLE */}
        <div>
            <h1>z value is : {z.current}</h1>
            <button className='my-2 p-2 bg-orange-400' onClick={()=>{z.current = z.current + 1}}>Increase Z</button>
        </div>

        
    </div>
  )
}

export default RefCounter