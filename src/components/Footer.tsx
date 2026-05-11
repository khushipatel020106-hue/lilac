"use client";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="top-80 relative overflow-hidden bg-[#f7f4ee] pt-[120px]">

      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/flowers.png')",
        }}
      />

      <div className="relative z-10 max-w-[1880px] mx-auto px-[40px]">

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[70px] pb-[85px] border-b border-[#e5dac7]">

          {/* Left */}
          <div>

            <h2 className="text-[22px] font-semibold mb-[52px]">
              Contact
            </h2>
            <br/>

            <div className="space-y-[28px]">

              <div className="flex items-start gap-[18px]">

                <Phone
                  size={20}
                  className="mt-[6px] shrink-0"
                />

                <p className="text-[16px] leading-[36px] text-black/75">
                  +(1) 000 123 456 789
                </p>

              </div>

              <div className="flex items-start gap-[18px]">

                <Mail
                  size={20}
                  className="mt-[6px] shrink-0"
                />

                <p className="text-[16px] leading-[36px] text-black/75">
                  info@example.com
                </p>

              </div>

              <div className="flex items-start gap-[18px]">

                <MapPin
                  size={20}
                  className="mt-[6px] shrink-0"
                />

                <p className="text-[16px] leading-[40px] text-black/75">
                  No: 58 A, East Madison Street,
                  <br />
                  Baltimore, MD, USA 4508
                </p>

              </div>

            </div>
            <br/>

            {/* Social */}
            <div className="flex items-center gap-[14px] mt-[52px]">

              {["IG", "IN", "f", "X"].map((item) => (
                <div
                  key={item}
                  className="w-[40px] h-[40px] rounded-full bg-[#eadcbc] flex items-center justify-center hover:bg-[#dfcda2] transition-all duration-300 cursor-pointer"
                >

                  <span className="text-[16px] font-semibold">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Center */}
          <div className="flex flex-col items-center text-center">

            <h1 className="font-serif text-[74px] tracking-[-4px] leading-none mb-[20px]">
              LILAC
            </h1>

            <p className="max-w-[550px] text-[16px] leading-[30px] text-black/70 mb-[42px]">
              Rorem ipsum sit amet, sed do eiusmod ut labore et dolore magna
              aliqua. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
            <br/>

            <div className="flex items-center flex-wrap gap-[26px] justify-center">

              {["Home", "Shop", "Collection", "Blog"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center"
                >

                  <span className="px-[28px] text-[20px] hover:text-[#c58b55] transition-all duration-300 cursor-pointer">
                    {item}
                  </span>

                  {index !== 3 && (
                    <div className="w-[1px] h-[24px] bg-[#d9c7a5]" />
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col xl:items-end xl:text-right">

            <h2 className="text-[22px] font-semibold mb-[52px]">
              Newsletter
            </h2>

            <p className="max-w-[500px] text-[16px] leading-[20px] text-black/70 mb-[40px]">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit,
              eiusmod aliqua.
            </p>
            <br/>

            {/* Input */}
            <div className="flex items-center w-full max-w-[390px] h-[50px] border border-[#d8ccb6]">
            <br/>
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 h-[50px] w-[50px] bg-transparent px-[10px] text-[16px] outline-none placeholder:text-black/45"
              />

              <button className="w-[80px] h-full bg-[#eadcbc] flex items-center justify-center hover:bg-[#dfcda2] transition-all duration-300">

                <Send size={25} />

              </button>

            </div>
            <br/>

            <p className="mt-[16px] text-[16px] text-black/60">
              We do not spam. We send offers instead.
            </p>
            <br/>

            {/* Payments */}
            <div className="flex flex-wrap items-center gap-[18px] mt-[48px] xl:justify-end">

              {[
                "Skrill",
                "PayPal",
                "MasterCard",
                "VISA",
                "Apple Pay",
              ].map((item) => (
                <div
                  key={item}
                  className="h-[52px] px-[20px] rounded-md bg-[#eadcbc] flex items-center justify-center text-[16px] font-semibold"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="h-[110px] flex items-center justify-center">

          <p className="text-[16px] text-black/65">
            © 2023 Lilac, WeDesignTech. All Right Reserved.
          </p>

        </div>

      </div>

      {/* Scroll Top */}
      <button className="fixed bottom-[24px] right-[24px] w-[58px] h-[58px] bg-[#eadcbc] flex items-center justify-center hover:bg-[#dfcda2] transition-all duration-300 z-50">

        <ChevronUp size={26} />

      </button>

    </footer>
  );
}