// components/SmoothScroll.tsx
'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const ctx = gsap.context(() => {
      if (!scrollRef.current || !wrapperRef.current) return;

      const smoother = ScrollSmoother.create({
        wrapper: scrollRef.current,
        content: wrapperRef.current,
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
        onUpdate: (self) => {
          // Sync other ScrollTriggers with smoothed scroll
          ScrollTrigger.refresh();
        },
      });

      // Critical: Re-map ScrollTrigger updates
      ScrollTrigger.defaults({ markers: false });
      ScrollTrigger.config({ limitCallbacks: true });
      ScrollTrigger.normalizeScroll(true);
      ScrollTrigger.addEventListener('refresh', () => {
        smoother.paused(true); // Using paused() method instead of pause()
      });
      ScrollTrigger.addEventListener('refreshInit', () => {
        smoother.paused(false); // Using paused() method instead of resume()
      });

      return () => {
        smoother.kill();
        ScrollTrigger.clearMatchMedia();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollRef} className="smooth-wrapper">
      <div ref={wrapperRef} data-scroll-container>
        {children}
      </div>
    </div>
  );
}