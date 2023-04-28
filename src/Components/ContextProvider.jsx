import React, { createContext, useEffect, useState } from 'react'
import { Data_fetch } from '../Const-Files/fetch-product';

export const myContext=createContext();
const ContextProvider = ({children}) => {
    const[product,setProduct]=useState([])
    const [cart,setCart]=useState([])
    const [cartCount,setCartCount]=useState(0)
    useEffect(()=>{
      Data_fetch(setProduct)
    },[])
  return (
   <>
   <myContext.Provider value={{product,cart,setCart,cartCount,setCartCount}}>
    {children}
   </myContext.Provider>
   </>
  )
}

export default ContextProvider