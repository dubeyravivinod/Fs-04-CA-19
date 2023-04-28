import React, { useContext } from 'react'
import '../CSS_files/Product.css'
import { myContext } from '../Components/ContextProvider'

const Cart = () => {
  const{cart,setCart,cartCount,setCartCount}=useContext(myContext);
  const removeCart=(id)=>{
    const remove=cart.filter((ele)=>{
      return ele.id !==id
    })
    setCart(remove)
    setCartCount(cartCount-1)
  }
  return (
   <>
     <div className='product'>
      {cart.lenght>0 ? <h1>Data not Fetch</h1> 
      :
      cart.map((ele)=>{
        return<div key={ele.id} className="card">
          <img src={ele.image} alt="product image" />
          <h2>{ele.category}</h2>
          <p>Price: {ele.price} $</p>
          <span>Free delivery</span>
          <button onClick={()=>{
            removeCart(ele.id)
          }}>Remove Cart</button>
        </div>
        
      })
    }
    
    </div>
   </>
  )
}

export default Cart