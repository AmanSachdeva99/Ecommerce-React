import { useEffect, useState } from 'react';
import '../App.css';

function Cart({ cart ,setCart}) {

    useEffect(() => {
    }, [cart])

const loadScript=(src)=>{
    return new Promise((resolve)=>{
        const script=document.createElement('script')
        script.src=src

        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }

        document.body.appendChild(script)
    })
}

const displayRajorPay=async (price)=>{
    const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
        alert("you are offline")
        return
    }
    else{
        console.log(res)
    }

const options={
    key:"rzp_test_h90MSMG6DpLFil",
    currency:"INR",
    amount:price*100,
    name:"ShoppingCart",
    description:"Thanks for purchasing",
    image:'https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg',


    handler:function (response){
        alert(response.razorpay_payment_id)
        alert("payment Succesfully")
        setCart([])
    },
    prefil:{
        name:"ShoppingCart"
    }
}

const paymentObject=new window.Razorpay(options)
paymentObject.open()
}

    return (
        <div className='cart'>
            <div className='center'>
            {
                cart?.map((c, i) => {
                    return (
                        <div>
                            <img src={c.image} style={{width:"100px"}} />
                            <span> {c.title}</span>
                            <button className='count'
                                onClick={() => {
                                    cart[i].quantity=cart[i].quantity>1?cart[i].quantity - 1:1
                                    const _CART=[...cart]
                                    setCart(_CART)
                                }}
                            >-</button>
                            <span> {c.quantity} </span>
                            <button className='count'
                                onClick={() => {
                                    cart[i].quantity+=1
                                    const _CART=[...cart]
                                    setCart(_CART)
                                }}
                            >+</button>
                            <button className='delete' style={{marginLeft:"10px"}} onClick={()=>{
                                setCart(cart.filter((d)=>c.id!==d.id))}}>Remove</button>
                            <span> Rs. {c.price * c.quantity} </span>
                        </div>
                        
                    )
                })
            }
            <div className='total'>
            <h4>Total:  <span></span>
                {
                    Math.ceil(cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0))
                }
           </h4>
           <button onClick={()=>displayRajorPay( Math.ceil(cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)))}>Buy</button>
           </div>
        </div >
        </div>
    )
}

export default Cart