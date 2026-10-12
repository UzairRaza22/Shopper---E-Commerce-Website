import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginSignup = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const allowedProviders = ["gmail", "hotmail", "outlook", "yahoo"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailRegex.test(email)) return false;

    const domain = email.split("@")[1]?.split(".")[0]; 
    return allowedProviders.includes(domain);
  };

  const handleSignup = () => {
    if (!name || !email || !password) {
      toast.error("Please fill all fields!");
      return;
    }
    
    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.find((u) => u.email === email);
      if (userExists) {
        toast.error("User already registered with this email!");
        setLoading(false);
        return;
      }

      if (!validateEmail(email)) {
      toast.error("Invalid Email Address!");
      setLoading(false);
      return;
    }

      const newUser = { name, email, password };
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      setUser(newUser);

      toast.success("Signup Successful!");
      setLoading(false);

      navigate("/");
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-[#fce3fe] dark:bg-[#080808] dark:text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-black px-6 sm:px-10 py-8 sm:py-12 shadow-md rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
          Sign Up
        </h1>

        <div className="flex flex-col gap-4 sm:gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 sm:h-14 w-full px-4 border border-[#c9c9c9] dark:border-gray-800 dark:bg-black text-black dark:text-white text-base sm:text-lg rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 sm:h-14 w-full px-4 border border-[#c9c9c9] dark:border-gray-800 dark:bg-black text-black dark:text-white text-base sm:text-lg rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 sm:h-14 w-full px-4 border border-[#c9c9c9] dark:border-gray-800 dark:bg-black text-black dark:text-white text-base sm:text-lg rounded-md focus:outline-none"
          />
        </div>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full h-12 sm:h-14 bg-[#ff4141] text-white text-base sm:text-lg font-medium rounded-md hover:bg-red-500 transition mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="mb-6 text-[#5c5c5c] text-sm sm:text-base text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/log")}
            className="text-[#ff4141] font-semibold cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
