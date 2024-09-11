import React, { useContext, useReducer, useState } from 'react'
import { createContext } from 'react'
const globalData = createContext()

const ContextApp = ({children}) => {

    const [show , setShow] = useState(false)
    
function handleHide(){
setShow(false)
}

  return (
   <globalData.Provider value={{show,setShow, handleHide}}>
    {children}
   </globalData.Provider>
  )
}

const useGLobalContext =() =>{
    return useContext(globalData)
}

export  {ContextApp ,useGLobalContext}
