import React from "react";
import {NavLink} from "react-router-dom";



const Navbar = () => {
  return (
    <>
    
         <div className="style">
            <NavLink className="active_class" to="/">Home</NavLink>
            <NavLink className="active_class" to="/features">Features</NavLink>
            <NavLink className="active_class" to="/contact">Contact</NavLink>
          </div>

    </>
  );
}

export default Navbar;
