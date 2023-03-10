import './App.css';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/Cart';
import { Shop } from './pages/shop/Shop';

import {ShopContextProvider} from './context/ShopContext'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router  basename='/react-shopping'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
