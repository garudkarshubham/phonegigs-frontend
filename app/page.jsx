'use client'

import Link from "next/link";
import Image from "next/image";
import banner from '../public/banner.webp'
import card1 from '../public/one.jpg'
import card2 from '../public/two.jpg'
import card3 from '../public/three.jpg'
import card4 from '../public/four.jpg'
import Category from './Category'
import { useEffect, useState } from "react";

const HomePage = () => {
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
      const storageEvent = window.addEventListener('storage', (event) => {
        if (event.key === 'accessToken') {
          setAccessToken(event.newValue)
        }
      })

      setAccessToken(localStorage.getItem('accessToken'))

      return () => {
        window.removeEventListener('storage', storageEvent)
      }
    }, [])

  return (
    <main className="">
      <nav className="w-full h-16 p-2 flex justify-between items-center mb-3 ">
        <Link href={'/'} className="text-2xl ml-16 font-bold">Phonegigs</Link>

        <div className="mr-16 flex space-x-4">

          <a className=" pt-1 text-center" href="/explore">Explore</a>
          <span className="font-bold pt-1">|</span>
          {
            accessToken ? (<button className="text-white font-medium bg-chocolate button">Sign Out</button>) : (
              <>
              <Link href={'/register'}>
                <button className="text-white font-medium bg-chocolate button">
                  Sign Up
                </button>
              </Link>
              <Link href={'/signin'}>
                <button className="text-white font-medium bg-tomato button">
                  Sign In
                </button>
              </Link>
              </>
            )
          }
        </div>
      </nav>

        <div className="w-11/12 h-[400px] relative mx-auto shadow-md rounded-3xl">
            <Image className="rounded-3xl object-cover" fill src={banner} alt='bannerimg'/>
        </div>

        <h2 className="text-xl font-semibold text-center mt-6 mb-4 text-chocolate">Best Sellers</h2>


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
              <div className="relative w-[280px] h-[280px] inset-0">
                <Image className="rounded-xl object-cover shadow-xl shadow-black/40" fill src={card1}alt="Samsung"/>
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
              <div className="relative w-[280px] h-[280px] inset-0">
                <Image className="rounded-xl object-cover shadow-xl shadow-black/40" fill src={card2}alt="Samsung"/>
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
              <div className="relative w-[280px] h-[280px] inset-0">
                <Image className="rounded-xl object-cover shadow-xl shadow-black/40" fill src={card3}alt="Samsung"/>
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
              <div className="relative w-[280px] h-[280px] inset-0">
                <Image className="rounded-xl object-cover shadow-xl shadow-black/40" fill src={card4}alt="Samsung"/>
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

        <h2 className="text-xl font-semibold text-center mt-6 mb-6 text-chocolate">Categories</h2> 
        
        <div className="flex  text-center justify-center space-x-2 mb-14 flex-wrap">
          <Category name={'Samsung'} link={'#'} bgStyles='bg-blue-800' hoverStyles='hover:bg-blue-600' />
          <Category name={'OnePlus'} link={'#'} bgStyles='bg-red-700' hoverStyles='hover:bg-red-600' />
          <Category name={'Xiaomi'} link={'#'} bgStyles='bg-tomato' hoverStyles='hover:bg-orange-500' />
          <Category name={'Apple'} link={'#'} bgStyles='bg-black' hoverStyles='bg-black' />
          <Category name={'Lenovo'} link={'#'} bgStyles='bg-red-600' hoverStyles='hover:bg-red-500' />
          <Category name={'Motorola'} link={'#'} bgStyles='bg-black' hoverStyles='hover:bg-black' />
          <Category name={'Redmi'} link={'#'} bgStyles='bg-tomato' hoverStyles='hover:bg-orange-500' />
          <Category name={'Vivo'} link={'#'} bgStyles='bg-blue-500' hoverStyles='hover:bg-blue-400' />
        </div>
       {/* Footer */}
       
       <div className="w-11/12 h-[350px] rounded-3xl bg-chocolate mx-auto">
        <Link className="text-white inline-block ml-24 mt-24 font-medium" href={'#'}>Services</Link>
        <p className="text-center">All Rights Reserved, Phonegigs Commerce Ltd.</p>
      </div>
    </main>
  );
};

export default HomePage;
