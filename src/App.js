
import './App.css';
import NavBar from './Components/NavBar';
import Heading from './Components/Heading';
import CartItemContainer from './Components/CartItemContainer';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const cartData = [
    {
      id:1,
      product:"Fancy Product",
      imgUrl:"./asset/4.jpg",
      wanted:"",
      rating:4,
      currency:'$',
      rate:80.00,

    },
    {
      id:2,
      product:"Special Item",
      imgUrl:"./asset/1.jpg",
      rating:5,
      wanted:"sale",
      discount:"$20.00",
      currency:'$',
      rate:18.00,

    },
    {
      id:3,
      product:"Sale Item",
      imgUrl:"./asset/2.jpg",
      wanted:"sale",
      rating:3.5,
      discount:"$50.00",
      currency:'$',
      rate:25.00,

    },
    {
      id:4,
      product:"Popular Item",
      imgUrl:"./asset/3.jpg",
      rating:5,
      wanted:"",
      currency:'$',
      rate:40.00,

    },
    {
      id:5,
      product:"Sale Item",
      imgUrl:"./asset/5.jpg",
      rating:5,
      wanted:"sale",
      discount:"$50.00",
      currency:'$',
      rate:25.00,

    },
    {
      id:6,
      product:"Fancy Product",
      imgUrl:"./asset/6.jpg",
      wanted:"",
      rating:2.5,
      currency:'$',
      rate:280.00,

    },
    {
      id:7,
      product:"Special Item",
      imgUrl:"./asset/7.jpg",
      wanted:"sale",
      rating:5,
      currency:'$',
      discount:"$20.00",
      rate:18.00,

    },
    {
      id:8,
      product:"Popular Item",
      imgUrl:"./asset/8.jpg",
      wanted:"",
      rating:4.5,
      currency:'$',
      rate:40.00,

    },
    
  ]

  const [basket, setBasket] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  let displayCartItems = ((item) => {
     setCart([...cart,item]);
     setTotal(total+ item.rate);
     setBasket(basket+1);
  })



  let removeFromCart = (item) =>{
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index,1);
    setCart([...cart]);
    setTotal(total-item.rate);
    setBasket(basket-1);
  }
   
  return (
   
    
    <div className="container-fluid">
      <NavBar basket={basket}></NavBar>
      <Heading></Heading>
      <CartItemContainer item={cartData} cart={cart} total={total} displayCartItems={displayCartItems} removeFromCart={removeFromCart}></CartItemContainer>
      <Footer></Footer>
    </div>
   
   
  );
}

export default App;
