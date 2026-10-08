import React, { useContext } from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseContext, { someContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'

const Contact = () => {

  const {contextValue} = useContext(someContext)
 
  return (
    <div>
        <HookUseEffect/>
        <p>{contextValue}</p>
        <HookUseRef/>
        <HookUseCallback/>
        <HookUseMemo/>
    </div>
  )
}

export default Contact