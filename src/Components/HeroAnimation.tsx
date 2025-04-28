"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";
import Header from "./Header";

export default function HeroAnimation() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "end start"],
    });
  
    const stripeScale = useTransform(scrollYProgress, [0, 0.6], [0,1]);
  return (
    <>
      <div ref={ref} className="absolute top-0 left-0 h-full overflow-hidden z-50 flex w-full">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              scaleX: stripeScale,
              originX: 0,
            }}
            className=" flex-1 bg-white h-screen w-0 "
          />
        ))}
      </div>
        <Hero/>

        <Header/>
    </>
  );
}
