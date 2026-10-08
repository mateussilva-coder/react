import { createContext } from "react"


export const someContext = createContext()



const HookUseContext = ({children}) => {

const contextValue = "Testing Context"

  return (
    <someContext.Provider value={{contextValue}}>
        {children}
    </someContext.Provider>
  )
}

export default HookUseContext