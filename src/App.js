import React from 'react';
import './tailwind.css';
import './index.css';
// import HelloWorld from './Component/HelloWorld';

import Header from './Component/Header';
import Home from './Views/Home.js';
import About from './Views/About.js';
import Footer from './Component/Footer';
import ContactUs from './Views/ContactUs';
import Product from './Views/Product';
// import Navigation from './Component/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"

function App() {
  return (
   
    <div className="relative pb-10 min-h-screen">
      
      {/* <Navigation /> */}

      <Router>
        <Header />
        
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />}>
              
            </Route>
            <Route path="/about" element={<About />}>
            
            </Route>
            <Route path="/contactus" element={<ContactUs />}>
            
            </Route>
            <Route path="/products/:id" element={<Product />}>
            
            </Route>
          </Routes>
        </div>
      
      <Footer />
      </Router>
      
      
      {/* <CounterExample /> */}
    </div>
    
  );
}

export default App;
