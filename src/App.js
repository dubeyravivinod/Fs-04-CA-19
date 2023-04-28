import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import NavBar from './Routing_Components/NavBar'
import Cart from './Routing_Components/Cart'
import Product from './Routing_Components/Product'
import Home from './Routing_Components/Home'
function App() {
  return (
   <>
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </div>
   </>
  );
}

export default App;