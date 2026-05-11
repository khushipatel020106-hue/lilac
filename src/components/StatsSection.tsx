    "use client";

    import { useEffect, useState } from "react";
    import { motion } from "framer-motion";

    function Counter({
    end,
    suffix = "",
    duration = 2000,
    }: {
    end: number;
    suffix?: string;
    duration?: number;
    }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const increment = end / (duration / 16);

        const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
            start = end;
            clearInterval(timer);
        }

        setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <span>
        {count}
        {suffix}
        </span>
    );
    }

    export default function StatsSection() {
    return (
        <section className="top-50 relative overflow-hidden bg-[#f7f1e7] py-[120px]">

        {/* Floral Background */}
        <div
            className="absolute inset-0 opacity-[0.08] bg-cover bg-center "
            style={{
            backgroundImage:
                "url('https://www.transparenttextures.com/patterns/flowers.png')",
            }}
        />

        <div className="relative z-10 max-w-[1850px] mx-auto px-[40px] text-center">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/* Small Heading */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="top-10 uppercase tracking-[6px] text-[16px] text-black mb-[18px]"
            >
            Best In Market
            </motion.p>
            <br/>

            {/* Main Heading */}
            <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[50px] leading-none font-semibold text-black mb-[90px]"
            >
            Healthiest Cosmetics
            </motion.h2>
            <br/>
            <br/>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[50px] items-center">

            {/* Item 1 */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >

                <h3 className="text-[65px] leading-none font-semibold text-black mb-[22px]">

                <Counter
                    end={4300}
                    suffix="K"
                />

                </h3>

                <div className="w-[100px] h-[1px] bg-black/100 mb-[20px]"  />

                <p className="text-[20px] font-semibold text-black">
                Products Sold
                </p>

            </motion.div>

            {/* Item 2 */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >

                <h3 className="text-[65px] leading-none font-semibold text-black mb-[22px]">

                99.99%

                </h3>

                <div className="w-[100px] h-[1px] bg-black/100 mb-[28px]" />

                <p className="text-[20px] font-semibold text-black">
                Satisfaction Guaranteed
                </p>

            </motion.div>

            {/* Item 3 */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >

                <h3 className="text-[65px] leading-none font-semibold text-black mb-[22px]">

                <Counter
                    end={42}
                    suffix="K"
                />

                </h3>

                <div className="w-[100px] h-[1px] bg-black/100 mb-[28px]" />

                <p className="text-[20px] font-semibold text-black">
                Customers Satisfied
                </p>

            </motion.div>

            {/* Item 4 */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >

                <h3 className="text-[65px] leading-none font-semibold text-black mb-[22px]">

                0.01%

                </h3>

                <div className="w-[100px] h-[1px] bg-black/100 mb-[28px]" />

                <p className="text-[20px] font-semibold text-black">
                Defective Returns
                </p>

            </motion.div>

            </div>
            <br/>
            <br/>

            {/* Bottom Description */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="align-centermax-w-[1100px] mx-auto mt-[90px] text-[20px] leading-[35px] text-black/70"
            >
            Fusce id aliquet justo. Etiam aliquet elit eleifend quam commodo
            sagittis. Quisque dapibus nulla in 
            <br/>blandit dictum.
            Quisque dapibus nulla in blandit dictum.
            </motion.p>

        </div>

        </section>
    );
    }