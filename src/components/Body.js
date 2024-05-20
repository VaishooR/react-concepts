import React from 'react';
import MemoPrimeNum from './useMemoHook/MemoPrimeNum';
import RefCounter from '../components/useRefHook/RefCounter';
import NoReRender from '../components/useRefHook/NoReRender';
import AccessDOM from '../components/useRefHook/AccessDOM';
import PrevState from '../components/useRefHook/PrevState';
import ObjectState from '../components/useStateHook/ObjectState';
import ParentContext from '../components/useContextHook/ParentContext';


const Body = () => {
  return (
    <div>
       {/* <MemoPrimeNum/> */}
       {/* <RefCounter/> */}
       {/* <NoReRender/> */}
       {/* <AccessDOM/> */}
       {/* <PrevState/> */}
       {/* <ObjectState/> */}
       <ParentContext/>
    </div>
  )
}

export default Body