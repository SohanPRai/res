import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Middle from "./components/middle";
export default function Home() {
  return (
    <div className=" bg-white text-black dark:text-white dark:bg-black h-full w-full gap-5">

      <div>
        <img src="https://i.pinimg.com/1200x/45/ea/2c/45ea2c14bcca0baa48a77f76d9f9641b.jpg"
          className="  w-full md:w-[87%]  justify-self-center items-center h-100 md:h-170 rounded-2xl">

        </img>

      </div>

      <div className="justify-self-center pt-9 text-red-500 text-3xl items-center">------ABOUT US------

      </div>
      <div className="justify-self-center pt-9 font-extralight text-5xl items-center "> The best burgers offer a<br></br> combination of tastes.</div>
      <div className="md:grid grid-cols-3 md:p-10 items-center justify-between">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F11.jpg&w=1200&q=75"
          className="h-100 w-90 rounded-3xl"></img>
        <div className="gap-5">
          <img src="https://i.pinimg.com/1200x/93/6b/cf/936bcf280316476438b628a498a65911.jpg"
            className="h-40 w-70 rounded-3xl">
          </img>
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F10.jpg&w=1200&q=75"
            className="h-60 pt-5 w-90 rounded-3xl">

          </img>
        </div>
        <div className="grid grid-rows-3 justify-center gap-4 items-center">
          <h3>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating.</h3>
          <div className="grid grid-cols-2 items-center  dark:bg-zinc-950 bg-sky-50 h-35  w-screen md:w-115">
            <img src="https://i.pinimg.com/736x/db/c2/89/dbc289d397afb97c458dafcbec7e7ff2.jpg"
              className="rounded-4xl   h-20 w-20 "></img>
            <div className="grid grid-rows-2 justify-center ">
              <div className="font-bold text-2xl justify-center pr-30 whitespace-nowrap ">Online Food Delivery

              </div >
              <div >Excellence projecting is devonshire<br></br> dispatched remarkably on estimating.</div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center bg-sky-50 dark:bg-zinc-950 h-35 w-screen md:w-115">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F22.png&w=640&q=75"
              className="rounded-4xl m-6  h-25 w-25  bg-black "></img>
            <div className="grid grid-rows-2 justify-center ">
              <div className="font-bold text-2xl justify-center pr-30 whitespace-nowrap ">Authentic food

              </div >
              <div className="text-sm" >Regularity projecting is devonshire<br></br> dispatched remarkably on estimating.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen md:h-200 h-600 bg-orange-50 dark:bg-neutral-900 ">
        <div className="pt-10 text-red-500 text-2xl  justify-self-center ">----OUR SPECIAL----

        </div>
        <div className="pt-10 text-4xl font-extralight justify-self-center text-black dark:text-white "> POPULAR BURGER

        </div>
        <div className="md:grid grid-cols-4 justify-center pt-20 mx-5">
          <div className="hover:bg-white h-130 w-90 dark:hover:bg-gray-900 justify-center">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Hamburger

            </div>
            <div className="bg-white grid grid-cols-2 w-40 h-6 border rounded-2xl border-gray-400 justify-self-center">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="bg-red-500 ml-10 rounded-r-2xl text-white">$12</div>
            </div>
            <div className="justify-self-center items-center">
              <div>The hamburger is the</div>
              <div>original and the best-known</div><div>burger to date</div>
            </div>
          </div>

          <div className="hover:bg-white h-130 w-90 dark:hover:bg-gray-900">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Chicken Burger

            </div>
            <div className="bg-white grid grid-cols-2 w-40 h-6 border rounded-2xl border-gray-400 justify-self-center">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="bg-red-500 ml-10 rounded-r-2xl text-white">$16</div>
            </div>
            <div className="justify-self-center items-center">
              <div>The hamburger is the</div>
              <div>original and the best-known</div><div>burger to date</div>
            </div>
          </div>
          <div className="hover:bg-white dark:hover:bg-gray-900 h-130 w-90">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">cheese Burger

            </div>
            <div className="bg-white grid grid-cols-2 w-40 h-6 border rounded-2xl border-gray-400 justify-self-center">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="bg-red-500 ml-10 rounded-r-2xl text-white">$25</div>
            </div>
            <div className="justify-self-center items-center">
              <div>The hamburger is the</div>
              <div>original and the best-known</div><div>burger to date</div>
            </div>
          </div>
          <div className="hover:bg-white  dark:hover:bg-gray-900 h-130 w-90">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=1080&q=75"></img>
            <div className="justify-self-center text-2xl font-bold">Bacon Burger

            </div>
            <div className="bg-white grid grid-cols-2 w-40 h-6 border rounded-2xl border-gray-400 justify-self-center">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="bg-red-500 ml-10 rounded-r-2xl text-white">$18</div>
            </div>
            <div className="justify-self-center items-center">
              <div>The hamburger is the</div>
              <div>original and the best-known</div><div>burger to date</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center 0 pt-20 gap-10 mx-20 pb-20">
        <img src="https://i.pinimg.com/736x/cb/85/31/cb8531d95dd6a988a43f0dcbb54b3bfb.jpg  "
          className="md:h-150">

        </img>
        <img src="https://i.pinimg.com/736x/d0/0d/54/d00d541bd089c68b927aa6e347600dd8.jpg"
          className="md:h-150 md:w-150   md:ml-20">
        </img>
      </div>
      <div className="w-screen h-350 md:h-200 justify-center  ">
        <div className="text-red-500 text-2xl  justify-self-center ">
          ----POPULAR MENU----
        </div>
        <div className="text-5xl font-semibold pt-4 justify-self-center">Latest Food Items

        </div>
        <div className="md:grid md:grid-cols-2 w-full gap-5 pt-10  ">
          <div className="grid grid-cols-3 pt-10 items-center justify-between">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F16.png&w=1080&q=75"
              className="h-20 w-20 mx-20 "></img>
            <div className="text-2xl font-bold">classic chicken
              <div className="text-sm hidden md:block">Ricotta / goat cheese / beetroot</div>
              <div className="text-sm hidden md:block">Ricotta / goat cheese / beetroot</div>
            </div>
            <div className="text-2xl font-bold pr-">$35

            </div>
          </div>
          <div className="grid grid-cols-3 pt-10 items-center justify-between">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F13.png&w=1080&q=75"
              className="h-20 w-20 mx-20 "></img>
            <div className="text-2xl font-bold">Margherita Pizza
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
            </div>
            <div className="text-2xl font-bold pr-">$29

            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 w-full gap-5 pt-10  ">
          <div className="grid grid-cols-3 pt-10 items-center justify-between">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F17.png&w=1080&q=75"
              className="h-20 w-20 mx-20 "></img>
            <div className="text-2xl font-bold">Cheese Burger
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
            </div>
            <div className="text-2xl font-bold pr-">$42

            </div>
          </div>
          <div className="grid grid-cols-3 pt-10 items-center justify-between">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F14.png&w=1080&q=75"
              className="h-20 w-20 mx-20 "></img>
            <div className="text-2xl font-bold">Pepperoni Pizza
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
            </div>
            <div className="text-2xl font-bold pr-">$29

            </div>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 w-full gap-5 pt-10  ">
          <div className="grid grid-cols-3 pt-10 items-center justify-between">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F18.png&w=1080&q=75"
              className="h-20 w-20 mx-20 "></img>
            <div className="text-2xl font-bold">Grilled Chicken
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
            </div>
            <div className="text-2xl font-bold pr-">$28

            </div>
          </div>
          <div className="grid grid-cols-3 pt-10 items-center justify-between">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F15.png&w=1080&q=75"
              className="h-20 w-20 mx-20 "></img>
            <div className="text-2xl font-bold">BBQ Chicken Pizza
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
              <div className="text-sm">Ricotta / goat cheese / beetroot</div>
            </div>
            <div className="text-2xl font-bold pr-">$45

            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-160">
        <img src="https://i.pinimg.com/736x/7c/72/ef/7c72ef4576673cdb86f67cbfd4f87728.jpg"
          className="w-full h-160 "></img>
        <div className="absolute inset-0 grid grid-cols-2 text-white">
          <div>
            <div className="justify-self-center pt-20 " >


              <div className="text-4xl font-light">Super Combo Offer</div>
              <div className="text-6xl font-light  pt-4"><div>BURGER AND</div>
                <div>SEA FISH CURRY</div>
                <div>COMBO</div></div>

            </div><h3 className="px-30 pt-8 hidden md:block ">Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</h3>
            <button className="bg-red-500 rounded-3xl h-10 w-40 justify-self-center hover:bg-red-300 m-15 mx-35 whitespace-nowrap ">Accept This deal</button>
          </div>
          <div>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F12.jpg&w=1920&q=75"
              className="rounded-full h-70 w-70 justify-self-center mt-30 "></img>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F13.png&w=1080&q=75"
              className="rounded-full h-40 w-50 mb-60 ml-90 hidden md:block"></img>
          </div>

        </div>
      </div><div className="h-400 md:h-210 w-full"><div className="md:flex md:flex-row flex flex-col justify-center md:justify-center-none">
        <iframe
          className="md:h-100 h-120 md:rounded-3xl rounded-2xl ml-3 md:w-2xl w-100 md:mt-50 mt-28"
          src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=dSRaWkM_P_7txhXQ"
          title="YouTube video player"
          allow="autoplay;picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className=" bg-white shadow-md md:w-xl w-100 md:h-150 h-160 rounded-4xl md:ml-11 ml-3 md:mt-35 mt-20">
          <div className="flex flex-col">
            <div className="text-3xl font-semibold text-indigo-950 ml-10 mt-18">
              Opening Hours
            </div>
            <div className="text-amber-950 font-medium ml-10 mt-4">
              <div>
                A relaxing and pleasant atmosphere, good jazz, dinner, and{" "}
              </div>
              <div>cocktails. The Patio Time Bar opens in the center..</div>
            </div>
            <div className="md:text-xl text-lg text-black font-semibold ml-10 mt-9">
              <div>Sunday To Tuesday ------- 9:00 am to 10:00 pm</div>
              <div className="mt-3">
                Wednesday To Thursday ----- 10:00 am to 9:00 pm
              </div>
              <div className="mt-3">
                Friday To Saturday ------- 10:00 am to 12:00 pm
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="bg-amber-900 w-24 h-24 rounded-full mt-11 ml-18">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=64&q=75"
                  className="justify-self-center mt-4 "
                ></img>
              </div>
              <div className="flex flex-col text-black mt-18 ml-5">
                <div className="text-lg ">Call Any Time</div>
                <div className="text-3xl font-semibold">+91 9483657402</div>
              </div>
            </div>
          </div>
        </div>
      </div></div>


    </div>
  );
}
