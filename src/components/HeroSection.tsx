"use client";

import { Play } from "lucide-react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="top-10 relative min-h-screen overflow-hidden bg-[#f6e9c7]">

      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute top-0 right-0 h-full w-[58%] overflow-hidden">

  {/* Main Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop')",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
  />

  {/* Soft Beige Overlay */}
  <div className="absolute inset-0 bg-[#f6e9c7]/15" />

</div>
      {/* Overlay
      <div className="absolute inset-0 bg-[#f6e9c7]/10" /> */}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-[36px] pt-[100px]">

        <div className="max-w-[760px]">
            <br/>
            <br/>

          {/* Small Text */}
          <p className="mb-[28px] uppercase tracking-[5px] text-[16px] text-black">
            Award Winning Beauty Products
          </p>

          {/* Heading */}
          <h1 className="mb-[36px] text-[40px] leading-[88px] font-semibold text-black">
            Highly performing beauty formula
          </h1>

          {/* Description */}
          <p className="mb-[52px] text-[14px] leading-[30px] text-black/75">
            Etiam ullamcorper facilisis porta. Donec tincidunt metus a elit
            tempor, a condimentum sapien laoreet.
            <br />
            Nullam metus orci, malesuada ac tincidunt vitae,
            tincidunt eu elit. Phasellus.
          </p>
          <br/>
          <br/>
          {/* Buttons */}
          <div className="flex items-center gap-[50px]">
        

            {/* Explore */}
            <button className="h-[72px] px-[42px] bg-[#eadcbc] uppercase tracking-[4px] text-[15px] hover:bg-[#dfcda2] transition-all duration-300">

              Explore Now

            </button>

            {/* Video */}
            <div className="flex items-center gap-[28px] cursor-pointer">

              <span className="uppercase tracking-[4px] text-[18px] text-black">
                Play Video
              </span>

              <div className="flex items-center gap-[20px]">

                <div className="w-[42px] h-[1px] bg-black/60" />

                <div className="relative flex items-center justify-center">

                  {/* Outer Circle */}
                  <div className="absolute w-[92px] h-[92px] rounded-full bg-[#eadcbc]/100 animate-pulse" />

                  {/* Inner Circle */}
                  <div className="relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[#f2e5cb] shadow-md">

                    <Play
                      size={22}
                      fill="black"
                      className="ml-[2px]"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}