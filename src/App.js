import React from "react";
import { Home } from './Landing Page/Home';
import Navbar from "./Landing Page/Navbar";
import ScrollCom from "./Landing Page/ScrollCom";
import Contact from "./Landing Page/Contact";
import Footer from "./Landing Page/Footer";


function App() {
  return (
   <>
   <Navbar/>
   <Home/>
 <ScrollCom/>
  <Contact/>
  <Footer/>
   </>
  );
}

export default App;
