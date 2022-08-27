import React from "react";
import {Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Features from "./Features";
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
   <>
   <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/features" element={<Features/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
