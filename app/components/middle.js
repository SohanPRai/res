export default function Middle() {
  return (
    <div className=" bg-stone-300 h-200 w-full text-black dark:bg-stone-900 dark:text-white ">
      <div className="relative"> <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F5.png&w=1920&q=75"
        className="h-70 w-70 m-20 "></img>
        <div className="justify-self-center absolute inset-0 text-5xl font-extralight mt-10 text-red-500">-----HAPPY CUSTEMERS-----
        </div>
        <div className="justify-self-center absolute inset-0 text-6xl font-extralight mt-30"> OUR CUSTOMER FEEDBACK
        </div>

      </div>
      <div className="grid grid-cols-2">
        <div className="relative">
          <div className="w-110 relative h-100 justify-self-center overflow-hidden [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=640&q=75"
              className="border-5 h-25 ml-120 w-25 border-white rounded-full"></img>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75"
              className="border-5 h-35 ml-130 mt-0 w-35 border-white rounded-full"></img>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75"
              className="border-5 h-25 ml-120 mt-10 w-25 border-white rounded-full"></img>

          </div>
        </div>
        <div><div>
          ⭐⭐⭐⭐⭐   (5/5)
        </div>
          <div className="text-3xl font-bold">The best food ever

          </div>
          <div className="mt-5 mb-15 mr-40">“Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.”

          </div>
          <div className="w-full h-0.5 mb-10 bg-gray-400"></div>
          <div className="text-2xl font-bold">Matthew j.Wyman</div>
          <div className="text-red-500 pt-2">SENIOR CONSULTANT</div>

        </div> 
        </div>

    </div>
  );
}
