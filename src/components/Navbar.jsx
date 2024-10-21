import React from "react";
import { Link } from 'react-router-dom';
import "../App.css"
import iconPizza from "../assets/img/icon-pizza.png"
import iconLockclose from "../assets/img/icon-lockclose.png"
import iconLockkey from "../assets/img/icon-lockkey.png"
import iconLockopen from "../assets/img/icon-lockopen.png"
import iconCart from "../assets/img/icon-cart.png"

const Navbar = () => {
    const token = false;
    const total = 25000;
    const formattedTotal = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'});
    
    
    return (
    <>
      <nav className="navbar bg-dark">
        
        <div className="container-fluid me-auto">
        
          <div className="text-white">
          <span>Pizzeria Mamma Mia!</span>
            <Link to="/" className='btnav navbar-brand text-white btn btn-sm' id="home"><img
                  src={iconPizza}
                  alt="icon pizza"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Home</Link>
            
            {token ? (
                <>  
            <Link to="/profile" className= 'btnav navbar-brand text-white btn btn-sm btn-dark' id="profile"> <img src={iconLockopen}
                  alt="icon lock open" width="30" height="24"
                  className="d-inline-block align-text-top"
                />
                Profile</Link>
              
            <Link to="/" id="logout" className="btnav navbar-brand text-white btn btn-sm btn-dark">
                <img
                  src={iconLockclose}
                  alt="icon lock close"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Logout
            </Link> </>
      ) : (
        <>
             <Link to="/login" id="login" className="btnav navbar-brand text-white btn btn-sm btn-dark">
                <img
                  src={iconLockkey}
                  alt="icon lock key"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Login
            </Link>
            <Link to="/register" id="register" className="btnav navbar-brand text-white btn btn-sm btn-dark">
                <img
                  src={iconLockkey}
                  alt="icon lock key"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Register
            </Link>
            </>
      )}
            
            
          </div>
          <div>
          <Link to="/cart" id="total" className="fs-5 text-primary border-primary btn-lg btn btn-dark">
                
                  <img
                  src={iconCart}
                  alt="icon cart"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Total: {formattedTotal}
                
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
