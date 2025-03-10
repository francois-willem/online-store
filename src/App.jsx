import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navigation from './components/Navigation';
import { TotalPriceProvider } from './components/TotalPriceContext'; 
import Cart from './pages/Cart';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <TotalPriceProvider>
      <Router>
        <Navigation loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </TotalPriceProvider>
  );
}
