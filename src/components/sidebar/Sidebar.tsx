import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoLogoReact, IoHeart, IoStorefrontOutline } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { CgPokemon } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { GrTask, GrTasks } from "react-icons/gr";
import { LiaCookieBiteSolid } from "react-icons/lia";

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30}/>,
    title: 'Dashboard',
    subTitle: 'Main'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={30}/>,
    title: 'Counter',
    subTitle: 'Client Side Counter'
  },
  {
    path: '/dashboard/pokemons',
    icon: <CgPokemon size={30}/>,
    title: 'Pokemon',
    subTitle: 'Static Generated'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeart size={30} />,
    title: 'Favorites',
    subTitle: 'Global State'
  },
  // {
  //   path: '/dashboard/todos',
  //   icon: <FaTasks size={30}/>,
  //   title: `To-Do's`,
  //   subTitle: 'REST Todos'
  // },
  {
    path: '/dashboard/server-todos',
    icon: <FaTasks size={30} />,
    title: `Server To-Do's`,
    subTitle: 'Server Actions'
  },
  // {
  //   path: '/dashboard/cookies'  ,
  //   icon: <LiaCookieBiteSolid size={30}/>,
  //   title: `Cookies`,
  //   subTitle: 'Using Cookies'
  // },
  {
    path: '/dashboard/store'  ,
    icon: <IoStorefrontOutline size={30}/>,
    title: `Store`,
    subTitle: 'Using Cookies'
  },
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll scrollbar-hide"
      style={{ width: "400px" }}
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg flex items-center md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Next</span>
          <span className="text-blue-500">Dash</span>
        </h1>
        <p className="text-slate-500 text-sm">
        Demonstrating Next.js Power
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500 mb-2">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-16 h-16"
              src="/images/IMG20211019145547.jpg"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Rodrigo Rivas</span>
        </a>
      </div>
      {/* Navbar */}
      <div id="nav" className="w-full px-6">
        {/* Primer item */}

        {
          menuItems.map(item =>(
            <SidebarMenuItem key={item.path} {...item}/>
          ))
        }
        
        {/* Segundo Item */}
        {/* <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Estado Local
            </span>
          </div>
        </a> */}
      </div>
    </div>
  );
};
