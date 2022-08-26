import CartItem from './CartItem';
import CheckOut from './CheckOut';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartItemContainer({item,displayCartItems,cart,total,removeFromCart}){
    return(
        <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
         <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row justify-content-center">
         {
          item.map((data) =>{
           return <CartItem item={data} cart={cart}displayCartItems={displayCartItems}></CartItem>
          })
         }
         </div>
        </div>
      </section>
      </div>
      <div className='col-lg-3 py-5 m-4'>
{
  cart.length === 0 ? <div>No Items In Cart<ShoppingCartIcon /></div> :

  <table className="table">
        
  <thead>
    <tr>
    <th colSpan="3">My Cart</th>
    </tr>
    <tr>
      <th scope="col">Products Name</th>
      <th scope="col">Price</th>
      <th></th>
      </tr>
  </thead>
  <tbody>
  {
        cart.map((clickItem) => {
          return <CheckOut clickItem={clickItem} removeFromCart={removeFromCart}></CheckOut>
        })
       }
       <tr>
        <th>Total</th>
        <th>${total}</th>
        <th></th>
      </tr>
    </tbody>
  </table>
}  
       
      </div>
      </div>
      </div>
    )
}
export default CartItemContainer;