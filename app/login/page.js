'use client';
import React from 'react';

export default function Login({ goBack }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-[#1b1b1b] transition-colors duration-300">
      
      
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-xl font-semibold">Login Page</h1>
        
      </header>

    
      <div className="flex-grow flex items-center justify-center mt-10">
        <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-2xl flex w-full max-w-5xl overflow-hidden">
        
          <div className="hidden md:block w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"
              alt="Login"
              className="object-cover w-full h-full"
            />
          </div>

          
          <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              WELCOME <span className="text-yellow-600">BACK</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-6">
              Enter your email and password to continue
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-[#3a3a3a] dark:border-gray-600 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password*"
                className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-[#3a3a3a] dark:border-gray-600 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 rounded-md transition-colors"
              >
                LOGIN
              </button>
            </form>
            <button
          onClick={goBack}
          className="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-1 rounded-md transition"
        >
          Back
        </button>
          </div>
        </div>
      </div>

      
      <footer className="bg-black text-gray-300 px-6 py-10 flex flex-wrap justify-around">
        
        <div className="w-full sm:w-[45%] md:w-[22%] mb-8">
          <h3 className="text-white font-semibold text-lg mb-3">About Us</h3>
          <p className="text-sm mb-4">
            Continued at zealously necessary is Surrounded sir motionless she end
            literature. Gay direction neglected.
          </p>
          <div className="flex space-x-2">
            <a href="#" className="bg-yellow-600 text-black px-2 py-1 text-xs rounded">Facebook</a>
            <a href="#" className="bg-yellow-600 text-black px-2 py-1 text-xs rounded">Twitter</a>
            <a href="#" className="bg-yellow-600 text-black px-2 py-1 text-xs rounded">YouTube</a>
            <a href="#" className="bg-yellow-600 text-black px-2 py-1 text-xs rounded">Instagram</a>
          </div>
        </div>

        
        <div className="w-full sm:w-[45%] md:w-[18%] mb-8">
          <h3 className="text-white font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

      
        <div className="w-full sm:w-[45%] md:w-[25%] mb-8">
          <h3 className="text-white font-semibold text-lg mb-3">Contact Info</h3>
          <p className="text-sm mb-1">Sahyadri College of Engineering</p>
          <p className="text-sm mb-1">+91 9535656310</p>
          <p className="text-sm mb-1">food@restan.com</p>
        </div>

  
        <div className="w-full sm:w-[45%] md:w-[25%]">
          <h3 className="text-white font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Join our subscribers list to get the latest news and special offers.
          </p>
        </div>
      </footer>
    </div>
  );
}
