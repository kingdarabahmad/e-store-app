import React, { useEffect,createContext,useState} from 'react'
import { commerce } from '../lib/commerce'

export const appContext=createContext()

const Context = ({children}) => {

    const[products, setProducts]=useState([])
    const [cart, setCart]= useState({})
    const fetchProducts= async()=>{

        const {data}= await commerce.products.list()
        setProducts(data)
    }

    const fetchCart= async()=>{
      const cartData= await commerce.cart.retrieve()
      setCart(cartData)
    }

    const handleAddToCart= async(prodId,quantity)=>{
      const item= await commerce.cart.add(prodId,quantity)
      setCart(item)
    }

    const handleCartQuantity= async(prodId, quantity)=>{
      const updatedData=await commerce.cart.update(prodId, {quantity})
      setCart(updatedData)

    }

    const handleRemoveItemCart= async(prodId)=>{
      const remUpdatedData= await commerce.cart.remove(prodId)
      setCart(remUpdatedData)
    }
    // const handleRemoveItemCart=(id)=>{
    //   const newLine_items=cart.line_items.filter((items)=>(items.id!==id))
    //   setCart({
    //     ...cart,

    //     line_items:[...newLine_items]
    //   })

    // }

    const handleEmptyCart=async()=>{
      const emptyCart= await commerce.cart.empty()
      setCart(emptyCart)
    }

    
    useEffect(()=>{
        fetchProducts()
        fetchCart()

    },[])
  return (
    <appContext.Provider 
    value={{
      products,
      cart, 
      setCart,
      handleAddToCart, 
      handleCartQuantity, 
      handleRemoveItemCart, 
      handleEmptyCart,
      }}>
    {children}</appContext.Provider>
  )
}

export default Context