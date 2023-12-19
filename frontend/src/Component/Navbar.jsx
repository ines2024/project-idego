import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GetUsers, logout } from './Redux/Action';
  
 
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector(state=>state.products.basket)
 useEffect(()=>{
  //getcurrent
  dispatch(GetUsers()) 
 },[])
 const user= useSelector(state=>state.users.users)
   

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          My Contacts
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
           
            
                <li className="nav-item">
                  <Link className="nav-link" to={'/products'}>
                     List of products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/basket'}>
                     Basket
                     {basket.length}
                  </Link>
                </li>
                {!user.name? <><li className="nav-item">
                  <Link className="nav-link" to={'/users'}>
                      Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/user/login'}>
                      Login
                  </Link>
                 
                {user.name? <li className="nav-item">
                  <Link className="nav-link" to={'/user/login'} onClick={()=>dispatch(logout())}>
                      Logout
                  </Link>
                </li>:null} 
                <li className="nav-item">
                  <Link className="nav-link" to={'/users/get'}>
                      List of users
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>
                      contact
                  </Link>
                </li>
            
          
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;