import Link from "next/link";
import Image from "next/image";
import banner from '../public/banner.webp'
import card1 from '../public/one.jpg'
import card2 from '../public/two.jpg'
import card3 from '../public/three.jpg'
import card4 from '../public/four.jpg'
const HomePage = () => {
  return (
    <main className="">
      <nav className="w-full p-2 flex justify-between items-center mb-3 ">
        <p className="text-2xl ml-16 font-bold">Phonegigs</p>

        <div className="mr-16 flex space-x-4  ">
        <button className="text-white font-medium bg-chocolate button ">
        Sign Up
        </button>
        <button className="text-white font-medium bg-tomato button">
        Sign In
        </button>
        </div>
      </nav>

        <div className="w-11/12 h-max mx-auto shadow-md rounded-3xl">
            <Image className="h-[360px] rounded-3xl object-cover" src={banner} alt='bannerimg'/>
        </div>

        <h2 className="text-xl font-semibold text-center mt-4 mb-4 text-chocolate">Best Sellers</h2>


      {/* <div className="products w-11/12 mx-auto flex justify-around flex-wrap ">
        <div className="flex min-h-screen flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card1}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Samsung</h1>
                    <p className="text-lg p-1">Galaxy S20 FE</p>
                    <p className="text-base p-1">Samsung Galaxy most advanced zoom ever phone</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
         </div>

         <div className="flex min-h-screen flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card1}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Samsung</h1>
                    <p className="text-lg p-1">Galaxy S20 FE</p>
                    <p className="text-base p-1">Samsung Galaxy most advanced zoom ever phone</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>
              </div>
            </div> 
           </div>
         </div>

         <div className="flex min-h-screen flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card1}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Samsung</h1>
                    <p className="text-lg p-1">Galaxy S20 FE</p>
                    <p className="text-base p-1">Samsung Galaxy most advanced zoom ever phone</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
         </div>

         <div className="flex min-h-screen flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card1}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Samsung</h1>
                    <p className="text-lg p-1">Galaxy S20 FE</p>
                    <p className="text-base p-1">Samsung Galaxy most advanced zoom ever phone</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
         </div>

        </div> */}

        <div className="products w-11/12 mx-auto flex justify-around flex-wrap ">
        
         <div className="flex flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card1}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Oneplus</h1>
                    <p className="text-lg p-1">Oneplus 9T</p>
                    <p className="text-base p-1">Fastest hardware ever build</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
        </div>

        <div className="flex flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card2}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Samsung</h1>
                    <p className="text-lg p-1">Galaxy S20 FE</p>
                    <p className="text-base p-1">Samsung Galaxy most advanced zoom ever phone</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
        </div>

        <div className="flex flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card3}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Asus</h1>
                    <p className="text-lg p-1">Asus 2</p>
                    <p className="text-base p-1">Styelist phone of the year</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
        </div>

        <div className="flex flex-col justify-center ">
           <div className="group w-[280px] h-[280px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={card4}alt="Samsung"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justifu-center">
                    <h1 className="text-3xl font-bold p-2">Xiaomi</h1>
                    <p className="text-lg p-1">Redmi 9T</p>
                    <p className="text-base p-1">One of the best affordable phone ever build </p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View</button>
                </div>

              </div>
            </div> 
            
           </div>
        </div>    
        </div>

        <h2 className="text-xl font-semibold text-center mt-6 mb-4 text-chocolate">Categories</h2> 
        
        <div className="flex  text-center justify-center space-x-2 mb-14 flex-wrap">
            <Link className="text-white bg-blue-800  catagories hover:bg-blue-600 mb-1 " href={'#'}>Samsung</Link>
            <Link className="text-white bg-red-700  catagories hover:bg-red-600 mb-1" href={'#'}>OnePlus</Link>
            <Link className="text-white bg-tomato  catagories hover:bg-orange-500 mb-1" href={'#'}>Xiaomi</Link>
            <Link className="text-white bg-black catagories hover:bg-black mb-1" href={'#'}>Apple</Link>
            <Link className="text-white bg-red-600 catagories hover:bg-red-500 mb-1" href={'#'}>Lenovo</Link>
            <Link className="text-white bg-black catagories mb-1" href={'#'}>Motorola</Link>
            <Link className="text-white bg-tomato  catagories hover:bg-orange-500 mb-1" href={'#'}>Redmi</Link>
            <Link className="text-white bg-blue-500 catagories hover:bg-blue-400 mb-1" href={'#'}>Vivo</Link>
            
            
        </div>
       {/* Footer */}
       
       <div className="w-11/12 h-[350px] rounded-3xl bg-chocolate mx-auto  ">
       <Link className="text-white  inline-block ml-24 mt-24 font-medium" href={'#'}>Services</Link>
       
      </div>
      <p className=" text-center  ">All Rights Reserved, Phonegigs Commerce Ltd.</p>
    </main>
  );
};

export default HomePage;
