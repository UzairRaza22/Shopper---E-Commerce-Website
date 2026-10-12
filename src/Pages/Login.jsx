import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter both fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const savedUser = users.find((u) => u.email === email);

      if (!savedUser) {
        toast.error("Your email is not registered, please sign up!");
        setLoading(false);
        return;
      }

      if (savedUser.password !== password) {
        toast.error("Invalid password!");
        setLoading(false);
        return;
      }

      setUser(savedUser);
      toast.success("Login Successful!");
      setLoading(false);
      navigate("/");
    }, 1000); 
  };

  return (
    <div className="w-full min-h-screen bg-[#fce3fe] dark:bg-[#080808] dark:text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-black px-6 sm:px-10 py-8 sm:py-12 shadow-md rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4 sm:gap-6 mb-6">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 sm:h-14 w-full px-4 border border-[#c9c9c9] dark:border-gray-800 dark:bg-black text-black dark:text-white text-base sm:text-lg rounded-md focus:outline-none"/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 sm:h-14 w-full px-4 border border-[#c9c9c9] dark:border-gray-800 dark:bg-black text-black dark:text-white text-base sm:text-lg rounded-md focus:outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full h-12 sm:h-14 bg-[#ff4141] text-white text-base sm:text-lg font-medium rounded-md hover:bg-red-500 transition mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Logging..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
