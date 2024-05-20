import React from 'react';
import GrandChildCard from './grandChild/GrandChildCard';


const ChildBody = () => {
  return (
    <div className="w-60 h-40 border border-black m-auto text-center">
        ChildBody
        <GrandChildCard/>    
    </div>
  )
}

export default ChildBody