'use client';

import React, { useState } from 'react';
import Contact from './contact/page.js';
import Login from './login/page.js';
import Menu from './menu/page.js';


export default function MainPage() {
  const [page, setPage] = useState('home'); 

  
  if (page === 'menu') return <Menu goBack={() => setPage('home')} />;
  if (page === 'contact') return <Contact goBack={() => setPage('home')} />;
  if (page === 'login') return <Login goBack={() => setPage('home')} />; 

  return (
    <div className="min-h-screen flex flex-col bg-gray-400 dark:bg-gray-800 p-6 text-black dark:text-white">

      {/* ---------- HEADER ---------- */}
      <header className="flex justify-between items-center bg-black dark:bg-gray-900 rounded-2xl px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">RESTANT</h1>
        <nav className="flex gap-6 text-lg">
          <button onClick={() => setPage('home')} className="hover:text-yellow-400">Home</button>
          <button onClick={() => setPage('menu')} className="hover:text-yellow-400">Menu</button>
          <button onClick={() => setPage('contact')} className="hover:text-yellow-400">Contact</button>
          <button onClick={() => setPage('login')} className="hover:text-yellow-400">Login</button>
        </nav>
      </header>

      {/* ---------- HERO SECTION ---------- */}
      <div className="mt-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNHSLnZ5dM3-KVrqB11sZiqDpPmOY56vE8A&s"
          className="w-full h-64 object-cover rounded-2xl"
          alt="Burger Banner"
        />
      </div>

      {/* ---------- TEXT SECTION ---------- */}
      <div className="text-center my-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          The best burgers offer a combination of tastes.
        </h2>
      </div>

      {/* ---------- GRID SECTION ---------- */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="flex flex-col space-y-4">
          <div className="flex gap-4">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F11.jpg&w=1200&q=75"
              alt="Burger 1"
              className="rounded-lg object-cover w-1/2 h-48"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F10.jpg&w=1200&q=75"
              alt="Burger 2"
              className="rounded-lg object-cover w-1/2 h-48"
            />
          </div>
        </div>

        <div className="bg-red-600 rounded-lg flex flex-col items-center justify-center text-center p-10 text-white">
          <h3 className="text-5xl font-bold mb-2">18+</h3>
          <p className="text-lg font-semibold">Types Of Burger</p>
        </div>

        <div className="space-y-6">
          <p>
            Drawings can followed improved out sociable not. Earnestly so do instantly pretended.
            See general few civilly amiable pleased account carried.
          </p>

          <div className="border-t border-gray-500 pt-6">
            <h4 className="text-2xl font-semibold mb-2">Online Food Delivery</h4>
            <p>Excellence projecting is devonshire dispatched remarkably on estimating.</p>
          </div>
        </div>
      </div>

      {/* ---------- POPULAR BURGERS ---------- */}
      <div className="text-center my-16">
        <h3 className="text-red-600 text-lg font-semibold mb-2 flex justify-center items-center gap-2">
          <span className="w-12 h-[1px] bg-red-600"></span> OUR SPECIAL <span className="w-12 h-[1px] bg-red-600"></span>
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold">Popular Burgers</h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { name: 'Hamburger', img: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png', price: '$12' },
          { name: 'Chicken Burger', img: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96777.png', price: '$16' },
          { name: 'Cheese Burger', img: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96795.png', price: '$25' },
          { name: 'Bacon Burger', img: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96785.png', price: '$18' }
        ].map((b, i) => (
          <div key={i} className="bg-gray-700 rounded-2xl p-6">
            <img src={b.img} alt={b.name} className="w-40 mx-auto" />
            <h4 className="text-white font-bold mt-4 text-xl">{b.name}</h4>
            <div className="flex justify-center items-center gap-3 mt-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">{b.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-black text-gray-300 px-6 py-10 flex flex-wrap justify-around mt-20 rounded-2xl">
        <div className="w-full sm:w-[45%] md:w-[22%] mb-8">
          <h3 className="text-white font-semibold text-lg mb-3">About Us</h3>
          <p className="text-sm mb-4">
            Continued at zealously necessary is Surrounded sir motionless she end literature.
          </p>
          <div className="flex space-x-2">
            {['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((s, i) => (
              <a key={i} href="#" className="bg-yellow-600 text-black px-2 py-1 text-xs rounded">{s}</a>
            ))}
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
