
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar({basket}){
   
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Trendy Collections</a>
                  <form className="d-flex">
                    <a className="btn btn-outline-dark" type="submit" href='#'>
                       <ShoppingCartIcon />
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{basket}</span>
                    </a>
                </form>
           
        </div>
    </nav>


    );
}

export default NavBar;