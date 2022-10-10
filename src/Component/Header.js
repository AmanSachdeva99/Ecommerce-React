import React from 'react'

const Header = ({cart,setShowCart}) => {
  return (
    <div className='flex shopping-card'>
      <div onClick={()=>setShowCart(false)} style={{cursor: "pointer"}}><h2>Shopping Cart</h2></div>
      <div onClick={()=>setShowCart(true)} style={{cursor: "pointer"}}><h2>Cart
      <sup>{cart.length}</sup></h2>
      </div>
      
    </div>
  )
}

export default Header
