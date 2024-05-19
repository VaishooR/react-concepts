import React, { useState } from 'react'

const ObjectState = () => {

    const [counter0,setCounter0] = useState(100)
    const [counter1,setCounter1] = useState(100)
    const [counter2,setCounter2] = useState({value:100})

    const handleIncrease0 = () => {
        setCounter0(counter0 +1)
    }

    const handleIncrease1 = () => {
        setCounter1((prev)=>prev +1)
    }

    const handleIncrease2 = () => {
       setCounter2((prev)=>({value:prev.value +1}))
    }

  return (
    <div className="m-10">

        <div>
            <span>{counter0}</span>
            <button onClick={handleIncrease0} className='my-2 p-2 bg-orange-400'>Increase Counter 0</button>
        </div>

        <div>
            <span>{counter1}</span>
            <button onClick={handleIncrease1} className='my-2 p-2 bg-orange-400'>Increase Counter 1</button>
        </div>
        <div>
            <span>{counter2.value}</span>
            <button onClick={handleIncrease2} className='my-2 p-2 bg-orange-400'>Increase Counter 2</button>
        </div>
           
    </div>
  )
}

export default ObjectState