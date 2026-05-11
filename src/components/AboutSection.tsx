"use client";

import {
  Leaf,
  FlaskConical,
  Flame,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-[120px]">

      <div className="max-w-[1850px] mx-auto px-[40px]">

        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-[80px]">

          {/* Left Content */}
          <div className="max-w-[720px]">

            {/* Small Heading */}
            <p className="uppercase tracking-[5px] text-[12px] text-black mb-[18px]">
              Who We Are
            </p>
            <br/>

            {/* Main Heading */}
            <h2 className="text-[35px] leading-[40px] font-semibold text-black mb-[34px]">
              Best Selling Aesthetician Skincare
              <br />
              Brands
            </h2>
            <br/>

            {/* Description */}
            <p className="text-[16px] leading-[24px] text-black/70 mb-[58px]">
              Nullam euismod purus quis blandit eleifend. Nullam egestas,
              diam ut ornare ultrices, nibh metus feugiat ante,
              id scelerisque augue est.
            </p>
            <br/>

            {/* Features */}
            <div className="space-y-[45px]">

              {/* Item 1 */}
              <div className="flex items-start gap-[24px]">

                {/* Icon */}
                <div className="w-[70px] h-[70px] rounded-full bg-[#eadcbc] flex items-center justify-center shrink-0">

                  <Leaf
                    size={34}
                    className="text-[#c58b55]"
                  />

                </div>

                {/* Text */}
                <div>

                  <h4 className="text-[25px] font-semibold text-black mb-[8px]">
                    Premium Natural Ingredients
                  </h4>

                  <p className="text-[18px] leading-[30px] text-black/70">
                    Morbi pellentesque sem ac nulla molestie euismod.
                  </p>

                </div>

              </div>
              <br/>

              {/* Item 2 */}
              <div className="flex items-start gap-[24px]">

                {/* Icon */}
                <div className="w-[70px] h-[70px] rounded-full bg-[#eadcbc] flex items-center justify-center shrink-0">

                  <FlaskConical
                    size={34}
                    className="text-[#c58b55]"
                  />

                </div>

                {/* Text */}
                <div>

                  <h4 className="text-[25px] font-semibold text-black mb-[8px]">
                    High-quality Raw Materials
                  </h4>

                  <p className="text-[18px] leading-[30px] text-black/70">
                    Gorbi pellentesque sem ac nulla molestie euismod.
                  </p>

                </div>

              </div>
              <br/>

              {/* Item 3 */}
              <div className="flex items-start gap-[24px]">

                {/* Icon */}
                <div className="w-[70px] h-[70px] rounded-full bg-[#eadcbc] flex items-center justify-center shrink-0">

                  <Flame
                    size={34}
                    className="text-[#c58b55]"
                  />

                </div>

                {/* Text */}
                <div>

                  <h4 className="text-[25px] font-semibold text-black mb-[8px]">
                    End-to-end Beauty Solution
                  </h4>

                  <p className="text-[18px] leading-[30px] text-black/70">
                    Duis eleifend ipsum a justo vehicula, ut vestibulum sem
                    volutpat. Donec at aliquam purus. Mauris.
                  </p>

                </div>

              </div>

            </div>
            <br/>
            <br/>
            <br/>

            {/* Button */}
            <button className="mt-[60px] h-[72px] px-[44px] bg-[#eadcbc] uppercase tracking-[4px] text-[15px] hover:bg-[#dfcda2] transition-all duration-300">

              Explore Now

            </button>

          </div>

          {/* Right Images */}
          <div className="relative flex justify-end">

            {/* Main Woman Image */}
            <div className="relative z-10 w-[760px] h-[860px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                alt="Beauty"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Floating Makeup Product */}
            <div className="absolute left-[-60px] bottom-[-20px] z-20">

              <img
                src="https://pngimg.com/d/cosmetics_PNG14.png"
                alt="Makeup"
                className="w-[420px] object-contain drop-shadow-2xl"
              />

            </div>

            {/* Brush Background Effect */}
            <div className="absolute left-[40px] bottom-[80px] w-[340px] h-[340px] bg-[#eadcbc] blur-[120px] opacity-60 rounded-full" />

          </div>

        </div>

      </div>

    </section>
  );
}