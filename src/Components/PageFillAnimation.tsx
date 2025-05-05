"use client"
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

export default function PageFillAnimation() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
      });
      
  const stripeScale = useTransform(scrollYProgress, [0.08, 0.7], [0,1]);
  return (
    <div className='hidden md:block'>
        <div ref={ref} className="absolute bottom-0 left-0 h-full overflow-hidden z-20 flex flex-col w-full pointer-events-none">
        {/* Create multiple stripes */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              scaleY: stripeScale,
              originY: 1,
              pointerEvents: "none"
            }}
            className=" bg-black h-screen flex-1"
          />
        ))}
      </div>
    </div>
  
  )
}

