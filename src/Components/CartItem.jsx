import Rating from '@mui/material/Rating';


function CartItem({item,displayCartItems,cart}) {
    
    return (
       
        <div className="col-lg-4 mb-5">
            <div className="card w-100 h-100">
             <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{
                 item.wanted ? item.wanted:``
             }</div>
           

                <img className="card-img-top h-100 w-100" src={item.imgUrl} alt="..." />

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{item.product}</h5>
                         <div className="d-flex justify-content-center small text-warning mb-2">
                        {
                          
                            <Rating name="read-only" defaultValue={item.rating} precision={0.5} readOnly />
                          
                        }
                        </div> 
                        <span className="text-muted text-decoration-line-through me-2">{
                           item.discount ? item.discount:``
                        }
                        </span>
                           {item.currency}{item.rate} 
                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button disabled={cart.some((obj) => obj.id === item.id)} className="btn btn-outline-dark mt-auto" onClick={() => {displayCartItems(item)}}> 
                    {
                        item.product === "Fancy Product" ? `View options`:`Add To Cart`
                    }
                    </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CartItem;