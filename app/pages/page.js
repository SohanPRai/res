export default function Pages() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <div className="relative  text-white">
        <img src="https://i.pinimg.com/1200x/70/83/0d/70830dba2119b6d55605efefe8e95e87.jpg"
          className="w-full h-100 "></img>
        <div className="absolute inset-0 justify-self-center font-bold text-3xl pt-18">Restaurant Chef

        </div> <img src="https://i.pinimg.com/736x/33/49/df/3349df6d0216d7b09f881dd14d5b550c.jpg"
          className=" absolute inset-0 h-7 w-7 justify-self-center mr-30 mt-30"></img>
        <div className="absolute inset-0 justify-self-center font-bold pt-30  ">
          <button>home</button> <button>chef</button>
        </div>
      </div>
      <div className="bg-stone-100 md:h-300 h-full w-full">
        <div className="justify-self-center text-yellow-600 pt-10 text-3xl font-extrabold"> ---MASTER CHEF---</div>
        <div className="justify-self-center pt-10 text-5xl font-bold text-black"> Meet Our Special Chefs</div>
        <div className="md:grid grid-cols-3 mt-30">
          <div className="relative mt-5 md:mt-0">
            <img src="https://i.pinimg.com/736x/8a/cd/f0/8acdf02f50835e846520847d522b1793.jpg"
              className="rounded-full justify-self-center border-8 outline-2 outline-black border-white h-90 w-90 "></img>
            <div className="absolute inset-0 justify-self-center mt-66  bg-yellow-600 h-20 w-80 font-bold ">
              <div className="pt-2.5 text-2xl  justify-self-center">Alexander Petllo<br></br>
                Assistant Chef </div>
            </div>
          </div>
          <div className="relative  mt-14 md:mt-0">
            <img src="https://i.pinimg.com/1200x/bf/89/cf/bf89cfe395e582e5f6a1dbe5e1f8b317.jpg"
              className="rounded-full justify-self-center border-8 outline-2 outline-black border-white h-90 w-90 "></img>
            <div className="absolute inset-0 justify-self-center mt-66  bg-yellow-600 h-20 w-80 font-bold ">
              <div className="pt-2.5 text-2xl  justify-self-center ">
                Mendia Juxef <br></br>
                Burger King </div>
            </div>
          </div>
          <div className="relative  mt-14 md:mt-0">
            <img src="https://i.pinimg.com/736x/7e/cd/6c/7ecd6ca588302031b422bd7f9121716e.jpg"
              className="rounded-full justify-self-center border-8 outline-2 outline-black border-white h-90 w-90 "></img>
            <div className="absolute inset-0 justify-self-center mt-66  bg-yellow-600 h-20 w-80 font-bold ">
              <div className="pt-2.5 text-2xl  justify-self-center">Petro William<br></br>
                Main Chef</div>
            </div>
          </div>
        </div>
         <div className="md:grid grid-cols-3 mt-30">
          <div className="relative  mt-14 md:mt-0">
            <img src="https://i.pinimg.com/736x/6b/f2/0f/6bf20f909f5b9df469a26d8a300d985e.jpg"
              className="rounded-full justify-self-center border-8 outline-2 outline-black border-white h-90 w-90 "></img>
            <div className="absolute inset-0 justify-self-center mt-66  bg-yellow-600 h-20 w-80 font-bold ">
              <div className="pt-2.5 text-2xl  justify-self-center">Alexander Petllo<br></br>
                Assistant Chef </div>
            </div>
          </div>
          <div className="relative  mt-14 md:mt-0">
            <img src="https://i.pinimg.com/736x/a2/7c/27/a27c272bce1623a47770f7afc200158f.jpg"
              className="rounded-full justify-self-center border-8 outline-2 outline-black border-white h-90 w-90 "></img>
            <div className="absolute inset-0 justify-self-center mt-66  bg-yellow-600 h-20 w-80 font-bold ">
              <div className="pt-2.5 text-2xl  justify-self-center ">
                Mendia Juxef <br></br>
                Burger King </div>
            </div>
          </div>
          <div className="relative mb-5 md:mb-0 mt-14 md:mt-0 ">
            <img src="https://i.pinimg.com/736x/37/e4/eb/37e4eb3626f8d09050eccddc414dc8a7.jpg"
              className="rounded-full justify-self-center border-8 outline-2 outline-black border-white h-90 w-90 "></img>
            <div className="absolute inset-0 justify-self-center mt-66  bg-yellow-600 h-20 w-80 font-bold ">
              <div className="pt-2.5 text-2xl  justify-self-center">Petro William<br></br>
                Main Chef</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
