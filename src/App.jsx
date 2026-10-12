import './App.css';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Login from './Pages/Login.jsx';
import Cart from './Pages/Cart.jsx';
import Checkout from './Pages/Checkout.jsx'; 
import OrderConfirmation from './Pages/OrderConfirmation.jsx';
import ThankYou from './Pages/Thankyou.jsx';
import Footer from './Footer.jsx';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LatestCollection from './Pages/LatestCollection.jsx';
import OffersDetails from './Pages/OffersDetails.jsx';
import Offers from './Offers.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  const [user, setUser] = useState(null);

  const [theme,setTheme] = useState(localStorage.getItem('theme')
   ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <BrowserRouter>
     <ScrollToTop /> 
      <ToastContainer/>
      <Navbar user={user} setUser={setUser} theme={theme} setTheme={setTheme} />
      <div className="pt-16 bg-white dark:bg-black min-h-[100vh] pb-20">
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/product/:productId' element={<Product />} /> 
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} /> 
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/login' element={<LoginSignup setUser={setUser} />} />
        <Route path='/log' element={<Login setUser={setUser} />} />
        <Route path='/latest-collection' element={<LatestCollection />}/>
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers-details" element={<OffersDetails />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
