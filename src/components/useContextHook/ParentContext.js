import React, { createContext, useState } from 'react';
import ChildBody from './childContext/ChildBody';
import ChildHeader from './childContext/ChildHeader';

export const ThemeContext = createContext();

const ParentContext = () => {
    const [dark,setDark] = useState(true)
  return (
    <ThemeContext.Provider value={{dark,setDark}}>
        <div className="mt-20 w-80 h-80 border border-black m-auto text-center">
          <div >ParentContext</div>
          <button className="m-2 px-6 py-1 rounded-md pointer-cursor bg-red-400 text-white" onClick={()=>{setDark(!dark)}}>Change Child Theme</button>
          <ChildHeader/>
          <ChildBody/> 
        </div>    
    </ThemeContext.Provider>
  )
}

export default ParentContext