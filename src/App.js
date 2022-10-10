import './App.css';
import {useState,useEffect} from 'react'
import Header from './Component/Header';
import Products from './Component/Products';
import axios from 'axios'
import Cart from './Component/Cart';

function App() {

const [data,setData]=useState([])

const [cart,setCart]=useState([])

const [showCart,setShowCart]=useState(false)

useEffect(()=>{
  getData()

},[])

const getData=()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
}

const addCart = (d) => {
  let flag=false
  console.log(d)
  cart.some((c,i)=>{
    if(c.id===d.id){
      cart[i].quantity+=1
      flag=true
      return
    }
  })

if(flag){
  setCart(cart)
}
  else{
    setCart([...cart, { ...d, quantity: 1 }])
  }
  

  /*if(cart.indexOf(d)===-1){
    setCart([...cart, { ...d, quantity: 1 }])
  }
  else{
    cart[cart.indexOf(d)].quantity+=1
    setCart(cart)
  }*/
  //setCart([...cart, { ...d, quantity: 1 }])

  console.log(cart)
}

const increment=()=>{

}



  return (
    <div className="app">
      <Header cart={cart} setShowCart={setShowCart}/>
      <div className='box'>
      {showCart?<Cart cart={cart} setCart={setCart} />:<div className='row'><Products data={data} addCart={addCart}/></div>}
    </div></div>
  );
}

export default App;
