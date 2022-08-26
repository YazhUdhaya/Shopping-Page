import React from "react";


function CheckOut({clickItem,removeFromCart}){
    return(

  
    <tr>
      
      <td>{clickItem.product}</td>
      <td>{clickItem.currency}{clickItem.rate}</td>
      <td> <button class="badge bg-primary rounded-pill" onClick={() => {removeFromCart(clickItem)}}>X</button></td>
      </tr>
      


)
   
    
}
export default CheckOut;