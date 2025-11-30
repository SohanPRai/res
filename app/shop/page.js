"use client";
export default function Shop() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white overflow-x-hidden ">
   <div className="relative  text-white">
        <img src="https://i.pinimg.com/1200x/70/83/0d/70830dba2119b6d55605efefe8e95e87.jpg"
          className="w-full h-100 "></img>
        <div className="absolute inset-0 justify-self-center font-bold text-3xl pt-18">Shop

        </div> <img src="https://i.pinimg.com/736x/33/49/df/3349df6d0216d7b09f881dd14d5b550c.jpg"
          className=" absolute inset-0 h-7 w-7 justify-self-center mr-30 mt-30"></img>
        <div className="absolute inset-0 justify-self-center font-bold pt-30  ">
          <button>home</button> <button>Shop</button>
        </div>
      </div>
              <div className="grid md:grid-cols-4 gap-3 grid-cols-1 justify-center pt-20 mx-5 ">
          <div className="hover:bg-white h-130 w-90 dark:hover:bg-gray-900 justify-center">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Margherita Pizza

            </div>
            
              
              <div className=" justify-self-center text-red-500">$12</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>

          <div className="hover:bg-white h-130 w-90 dark:hover:bg-gray-900">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F10.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Chicken Burger

            </div>
           <div className=" justify-self-center text-red-500">$8</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>
          <div className="hover:bg-white dark:hover:bg-gray-900 h-130 w-90">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Grilled Flank Steak

            </div>
            <div className=" justify-self-center text-red-500">$14</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>
          <div className="hover:bg-white  dark:hover:bg-gray-900 h-130 w-90">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Barbecue Chicken

            </div>
            <div className=" justify-self-center text-red-500">$8</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>
            </div>
            <div className="grid md:grid-cols-4 gap-3 justify-center pt-20 mx-5 grid-cols-1">
          <div className="hover:bg-white h-130 w-90 dark:hover:bg-gray-900 justify-center">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Vegetable Roll

            </div>
            
              
              <div className=" justify-self-center text-red-500">$25</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>

          <div className="hover:bg-white h-130 w-90 dark:hover:bg-gray-900">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Creamy Pasta

            </div>
           <div className=" justify-self-center text-red-500">$18</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>
          <div className="hover:bg-white dark:hover:bg-gray-900 h-130 w-90">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Chicken Shawarma

            </div>
            <div className=" justify-self-center text-red-500">$3</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>
          <div className="hover:bg-white  dark:hover:bg-gray-900 h-130 w-90">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Submarine Sandwich

            </div>
            <div className=" justify-self-center text-red-500">$6</div>
              <div className="justify-self-center">

              
              <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black "
                onClick={()=>{
                  alert("Added To Cart");
                }}> Add To Cart</button>
                </div>
            
          </div>
            </div>
          </div>
    

  );
}
