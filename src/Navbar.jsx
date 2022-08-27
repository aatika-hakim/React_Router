import React from "react";
import {NavLink} from "react-router-dom";



const Navbar = () => {
  return (
    <>
    
         <div className="style">
            <NavLink to="/">Home</NavLink>
            <NavLink className="active_class" to="/features">Features</NavLink>
            <NavLink className="active_class" to="/contact">Pricing</NavLink>
          </div>

    </>
  );
}

export default Navbar;
