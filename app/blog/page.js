
import Middle from "../components/middle";
export default function Blog() {
  return (
    <div className="bg-white text-black dark:bg-stone-500 dark:text-white">
      <div className="relative  text-white">
        <img src="https://i.pinimg.com/1200x/70/83/0d/70830dba2119b6d55605efefe8e95e87.jpg"
          className="w-full h-100 "></img>
        <div className="absolute inset-0 justify-self-center font-bold text-3xl pt-18">Blog Standard

        </div> <img src="https://i.pinimg.com/736x/33/49/df/3349df6d0216d7b09f881dd14d5b550c.jpg"
          className=" absolute inset-0 h-7 w-7 justify-self-center mr-30 mt-30"></img>
        <div className="absolute inset-0 justify-self-center font-bold pt-30  ">
          <button>home</button> <button>blog</button>
        </div>
      </div>
      <div className=" text-black p-10">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75"
          className="justify-self-center h-100 md:h-120 w-260 pt-10"></img>
          <div className="h-72 md:h-60 w-87 md:w-260 bg-orange-50 justify-self-center">
        <div className="flex flex-row text-sm text-black justify-self-center gap-6" >
          <div>12 August 2024        </div><div>John Baus</div>
        </div>
        <div className="text-4xl font-sans font-bold justify-self-center mt-5  hover:text-yellow-800">Picked up a Brussels burger Sprouts.

        </div>
        <div className="text-sm font-medium p-4 text-yellow-800 ">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

        </div>
        <div className="px-20">
        <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black ">READ MORE

        </button>
        </div>
      </div>
      </div>
       <div className=" text-black p-10">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75"
          className="justify-self-center  h-100 md:h-120 w-260 pt-10"></img>
          <div className="h-72 md:h-60 w-87 md:w-260 bg-orange-50 justify-self-center">
        <div className="flex flex-row text-sm text-black justify-self-center gap-6" >
          <div>12 August 2025      </div><div>Admin</div>
        </div>
        <div className="text-4xl font-sans font-bold justify-self-center mt-5  hover:text-yellow-800">This prefabricated passive house highly

        </div>
        <div className="text-sm font-medium p-4 text-yellow-800 ">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

        </div>
        <div className="px-20">
        <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black ">READ MORE

        </button>
        </div>
      </div>
      </div>
       <div className=" text-black p-10 mb-10 md:mb-0">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75"
          className="justify-self-center  h-100 md:h-120 w-260 pt-10"></img>
          <div className="h-72 md:h-60 w-87 md:w-260 bg-orange-50 justify-self-center">
        <div className="flex flex-row text-sm text-black justify-self-center gap-6" >
          <div>12 August 2024        </div><div>John Baus</div>
        </div>
        <div className="text-4xl font-sans font-bold justify-self-center hover:text-yellow-800 mt-5">Overcame breeding point concerns has.

        </div>
        <div className="text-sm font-medium p-4 text-yellow-800 ">Bdulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

        </div>
        <div className="px-20">
        <button className="bg-stone-500 h-15 w-50 rounded-2xl text-white  hover:bg-black ">READ MORE

        </button>
        </div>
      </div>
      </div>
      <Middle/>
    </div>
  );
}
