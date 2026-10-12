import React, { useContext, useState, useEffect } from "react";
import logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import dark_cart_icon from './assets/DarkCartIcon4.png'
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { Menu, X } from "lucide-react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { toast } from "react-toastify";

const Navbar = ({ user, setUser, theme, setTheme }) => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("shop");
    else if (path.startsWith("/mens")) setMenu("mens");
    else if (path.startsWith("/womens")) setMenu("womens");
    else if (path.startsWith("/kids")) setMenu("kids");
    else setMenu("");
  }, [location]);

  return (
    <div className={"fixed w-full z-50 flex justify-between items-center shadow-sm p-2 px-4 dark:bg-black dark:text-white bg-white text-black"}>
      
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        <p className="font-serif text-2xl md:text-3xl font-bold">Shopper</p>
      </Link>

      <ul className="hidden md:flex items-center gap-8 lg:gap-12 font-medium">
        {["shop", "mens", "womens", "kids"].map((item) => (
          <li key={item} className="flex flex-col items-center gap-1 cursor-pointer">
            <Link to={item === "shop" ? "/" : `/${item}`} className="no-underline">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && (
              <hr className="border-none w-4/5 h-[3px] rounded-lg bg-[#FF4141]" />
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 md:gap-6">
                                   
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <div className="relative">
          <Link to="/cart">
            <img src={theme==='dark' ? dark_cart_icon : cart_icon }  alt="cart" className='w-7 h-7 md:w-8 md:h-8 object-contain text-black dark:text-white'/>
          </Link>
          <div className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs">
            {getTotalCartItems()}
          </div>
        </div>
        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <span className="font-semibold text-red-500">{user.name}</span>
            <button
              onClick={() => { setUser(null)
              toast.success("Logout Successful!")
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="hidden md:block">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600">
              Login
            </button>
          </Link>
        )}

        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className={`absolute top-16 left-0 w-full ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-600"} shadow-md md:hidden flex flex-col items-center gap-6 py-6 text-lg font-medium z-50`}>
          {["shop", "mens", "womens", "kids"].map((item) => (
            <Link
              key={item}
              to={item === "shop" ? "/" : `/${item}`}
              className={`no-underline ${menu === item ? "text-red-500 font-semibold" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {user ? (
            <div className="flex flex-col items-center gap-4">
              <span className="font-semibold text-red-500">{user.name}</span>
              <button
                onClick={() => {
                  setUser(null);
                  setIsOpen(false);
                  toast.success("Logout Successful!")
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
