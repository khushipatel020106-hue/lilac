"use client";

import {
  ChevronDown,
  User,
  ShoppingBag,
  Heart,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#f6e9c7]/95 backdrop-blur-md">

      <div className="max-w-[1920px] mx-auto px-[36px]">

        <div className="h-[100px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">

            <h1 className="font-serif text-[72px] leading-none tracking-[-4px] text-black cursor-pointer">
              LILAC
            </h1>

          </div>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-[52px]">

            {/* Home */}
            <div className="group flex items-center gap-[6px] cursor-pointer">

              <span className="uppercase tracking-[4px] text-[14px] text-[#c58b55]">
                Home
              </span>

              <ChevronDown
                size={14}
                className="text-[#c58b55] transition-all duration-300 group-hover:rotate-180"
              />

            </div>

            {/* About */}
            <div className="group flex items-center gap-[6px] cursor-pointer">

              <span className="uppercase tracking-[4px] text-[14px] hover:text-[#c58b55] transition-all duration-300">
                About
              </span>

              <ChevronDown
                size={14}
                className="transition-all duration-300 group-hover:rotate-180"
              />

            </div>

            {/* Shop */}
            <div className="group flex items-center gap-[6px] cursor-pointer">

              <span className="uppercase tracking-[4px] text-[14px] hover:text-[#c58b55] transition-all duration-300">
                Shop
              </span>

              <ChevronDown
                size={14}
                className="transition-all duration-300 group-hover:rotate-180"
              />

            </div>

            {/* Blog */}
            <div className="group flex items-center gap-[6px] cursor-pointer">

              <span className="uppercase tracking-[4px] text-[14px] hover:text-[#c58b55] transition-all duration-300">
                Blog
              </span>

              <ChevronDown
                size={14}
                className="transition-all duration-300 group-hover:rotate-180"
              />

            </div>

            {/* Gallery */}
            <span className="uppercase tracking-[4px] text-[14px] cursor-pointer hover:text-[#c58b55] transition-all duration-300">
              Gallery
            </span>

            {/* Pages */}
            <div className="group flex items-center gap-[6px] cursor-pointer">

              <span className="uppercase tracking-[4px] text-[14px] hover:text-[#c58b55] transition-all duration-300">
                Pages
              </span>

              <ChevronDown
                size={14}
                className="transition-all duration-300 group-hover:rotate-180"
              />

            </div>

          </nav>

          {/* Icons */}
          <div className="flex items-center gap-[22px]">

            {/* User */}
            <User
              size={22}
              className="stroke-[1.8] cursor-pointer hover:-translate-y-[2px] transition-all duration-300"
            />

            {/* Bag */}
            <ShoppingBag
              size={22}
              className="stroke-[1.8] cursor-pointer hover:-translate-y-[2px] transition-all duration-300"
            />

            {/* Wishlist */}
            <div className="relative cursor-pointer hover:-translate-y-[2px] transition-all duration-300">

              <Heart
                size={22}
                className="stroke-[1.8]"
              />

              {/* Counter */}
              {/* <span className="absolute -top-[8px] -right-[10px] w-[20px] h-[20px] rounded-full bg-[#c58b55] text-white text-[10px] flex items-center justify-center">
                0
              </span> */}

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}