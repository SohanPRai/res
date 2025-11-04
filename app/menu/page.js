'use client';
import React from 'react';

export default function Menu({ goBack }) {
  const foods = [
    {
      name: "Pizza Slice",
      img: "https://i.pinimg.com/1200x/39/5b/15/395b15c129d15e30ecec2e7aa081d775.jpg",
      desc: "Cheese, Ham & Pineapple",
    },
    {
      name: "Cheese Burger",
      img: "https://i.pinimg.com/736x/e8/71/17/e87117318770c5416aefdbeed7b32d33.jpg",
      desc: "Juicy burger with cheese",
    },
    {
      name: "Chicken Masala",
      img: "https://i.pinimg.com/1200x/1d/dd/95/1ddd95f84379d5a5fb861868860ee5ef.jpg",
      desc: "Spicy and flavorful chicken",
    },
    {
      name: "Vegetable Roll",
      img: "https://i.pinimg.com/736x/b7/77/84/b777843975ddb856c5a11cb29d8a357b.jpg",
      desc: "Crispy roll with veggies",
    },
    {
      name: "Pasta Alfredo",
      img: "https://i.pinimg.com/736x/37/ee/aa/37eeaaad85cb641618b3e601ac02d216.jpg",
      desc: "Creamy sauce with herbs",
    },
    {
      name: "Grilled Sandwich",
      img: "https://i.pinimg.com/1200x/c0/7f/d5/c07fd509ed6a0e23950d24360fb54daa.jpg",
      desc: "Toasted bread with cheese",
    },
    {
      name: "French Fries",
      img: "https://i.pinimg.com/736x/7c/af/e9/7cafe93e17792d26f12919260b380f2a.jpg",
      desc: "Crispy golden fries",
    },
    {
      name: "Crispy Wafers",
      img: "https://i.pinimg.com/1200x/3c/0e/0a/3c0e0ae03b305efeb628de4f0113053c.jpg",
      desc: "Crunchy chocolate wafers",
    },
  ];

  return (
    <div className="text-gray-800 dark:text-white">
      
      <div className="relative w-full h-[350px] flex flex-col items-center justify-center text-center bg-[url('https://i.pinimg.com/1200x/70/83/0d/70830dba2119b6d55605efefe8e95e87.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Menu</h1>
        </div>
      </div>

    
      <div className="flex justify-center mt-6">
        <button
          onClick={goBack}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
           Back
        </button>
      </div>

      
      <div className="bg-white dark:bg-black py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          Choose Your Best Food
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {foods.map((food, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl hover:scale-105 transition-transform bg-white dark:bg-gray-800"
            >
              <img
                src={food.img}
                alt={food.name}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {food.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-2">
                  {food.desc}
                </p>
                <button className="text-yellow-600 font-semibold text-sm">
                  ORDER NOW 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
