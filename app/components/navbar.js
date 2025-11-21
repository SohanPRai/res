"use client";
import { useRouter } from "next/navigation";
export default function Navbar() {
    const router=useRouter();
    return (
        <div className="bg-white text-black dark:bg-black dark:text-black">
            <div className=" flex flex-row justify-between w-screen h-25 bg-white  text-black dark:bg-black dark:text-white ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"
                    className="w-15 h-15 md:ml-5 mt-5"
                ></img>
                <div className=" flex flex-row font-bold text-xl md:text-2xl md:gap-3 gap-2 md:m-7">


                    <button onClick={()=>{
                        router.push("/");
                    }} className=" hover:underline  hover:text-red-200">Home</button>
                    <button onClick={()=>{
                        router.push("/pages")
                    }} className=" hover:underline  hover:text-red-200">page</button>
                    <button onClick={()=>{
                        router.push("/menu")
                    }} className=" hover:underline  hover:text-red-200">Menu</button>
                    <button onClick={()=>{
                        router.push("/blog")
                    }} className=" hover:underline  hover:text-red-200">Blog</button>
                    <button onClick={()=>{
                        router.push("/shop")
                    }} className=" hover:underline  hover:text-red-200">Shop</button>

                </div> <div className="hidden md:block">
                <div className="bg-amber-700 border-4 border-amber-500 m-10 mr-10  h-12 w-26  items-center justify-self-center mr-3 ml-3 hover:bg-amber-600 rounded-2xl">
                    <div className="mt-2 justify-self-center r hover:underline">Register</div>
                </div></div>

            </div>
        </div>
    );
}














