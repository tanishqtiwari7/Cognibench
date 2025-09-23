import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";


const Signup = () => {
const navigate = useNavigate();

const LoginPageButton = () => {
    navigate('/login');
}


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/loginbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] z-0"></div>

      {/* Logo */}
      <div className="z-10 mb-8">
        <img src="/logo.png" alt="Logo" className="w-40 h-auto mx-auto" />
      </div>

      {/* Login form */}
      <div className="relative z-10 bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4 font-simple-nunito">
        <h2 className="m-0 text-dark-lavender text-center font-bold text-2xl md:mb-6">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="bg-dark-lavender text-white py-3 rounded-xl font-semibold text-base hover:opacity-90 transition"
        >
          Sign Up
        </button>


     {/* Social login icons */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FaGoogle className="w-5 h-5 text-dark-lavender" />
          </button>
          <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FaGithub className="w-5 h-5 text-dark-lavender" />
          </button>
          <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FaFacebookF className="w-5 h-5 text-dark-lavender" />
          </button>
        </div>


        <div className="text-center mt-2">
            <Link to="/login">
              <span className="text-gray-600 text-sm">Do you have an account?</span>
            </Link>
          <button
            type="button"
            className="ml-2 text-dark-lavender font-semibold hover:underline text-sm transition ease-in-out"
            onClick={LoginPageButton}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup
