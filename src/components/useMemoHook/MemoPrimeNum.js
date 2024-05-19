// Calculate nth-Prime number along with Theme change in a single component.

import React, { useMemo, useState } from "react";
import {isPrime,findNthPrime} from "../../utils/prime";

const MemoPrimeNum = () => {
  const [dark, isDark] = useState(false);
  const [num,setNum] = useState(0);

  // const findPrime1 = findNthPrime(num);
  const findPrime2 = useMemo(()=>findNthPrime(num),[num])

  return (
    <div className="text-center m-8">
      
      <div className={" border border-black w-80 h-80 " + (dark && " bg-black text-white ")}>
        <button onClick={()=>isDark(!dark)} className="my-6 p-2 bg-orange-500 rounded-md">Toggle</button>
        <p>Type a Number</p>
        <div>
            <input onChange={(e)=>setNum(e.target.value)} value={num} type="number" className=" p-2 border border-black my-4"/>
        </div>
        {/* <h2>{findPrime1}</h2> */}
        <h2>{findPrime2}</h2>
      </div>
      
    </div>
  );
};

export default MemoPrimeNum;
