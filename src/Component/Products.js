import React from 'react'

const Products = ({data,addCart}) => {
  return (
    <div className="details">
    <div id="product">
      {data?.map((d)=>{
        return(
          <div style={{ width:'350px '}}>
          <div className='card'>
          <img src={d.image} style={{width:"10px"}}></img>
          <div className='content'  >
          <h5>{d.title}</h5>
          <p>Rs {d.price}</p>
          <button className="cart" onClick={()=>addCart(d)}> Add to Cart</button>
          </div>
          </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Products
