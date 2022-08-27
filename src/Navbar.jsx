import React from "react";
import {NavLink} from "react-router-dom";



const Navbar = () => {
  return (
    <>
    
         <div className="style">
            <NavLink className="active_class" to="/">Home</NavLink>
            <NavLink className="active_class" to="/Service">Service</NavLink>
            <NavLink className="active_class" to="/search">Search</NavLink>
            <NavLink className="active_class" to="/contact">Contact</NavLink>
          </div>

    </>
  );
}

export default Navbar;
