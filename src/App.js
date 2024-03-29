import "./App.css";
import { BrowserRouter as Router, Routes, Route, Switch, Redirect, Navigate   } from "react-router-dom";
import {Navbar} from './components/navbar'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from "./context/shop.context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/React-Ecommerce-Website" />} />
          <Route path="/React-Ecommerce-Website"  element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

// React-Ecommerce-Website
