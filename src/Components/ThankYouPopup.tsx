"use client";
import { useThankYou } from "@/contexts/ThankYouContext";
import { useEffect } from "react";

const ThankYouPopup = () => {
  const { showThankYou, setShowThankYou } = useThankYou();
  
  useEffect(() => {
    const navbar = document.querySelector('header');
    const scrollY = window.scrollY; // Store current scroll position

    if (showThankYou) {
      // Lock scrolling and hide navbar
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`; // Prevent scroll jump
      document.body.style.width = '100%';
      
      if (navbar) {
        navbar.style.display = 'none';
      }
    }

    return () => {
      // Restore everything
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (navbar) {
        navbar.style.display = '';
      }
      
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY.toString() || '0'));
    };
  }, [showThankYou]);

  
//   useEffect(() => {
//     if (showThankYou) {
//       // Hide the navbar and disable scrolling
//       const navbar = document.querySelector('header');
//       if (navbar) {
//         navbar.style.display = 'none';
//       }
//       document.body.style.overflow = 'hidden';
//     } else {
//       // Show the navbar and enable scrolling
//       const navbar = document.querySelector('header');
//       if (navbar) {
//         navbar.style.display = 'block';
//       }
//       document.body.style.overflow = 'auto';
//     }

//   return () => {
//     const navbar = document.querySelector('header');
//     if (navbar) {
//       navbar.style.display = 'block';
//     }
//     document.body.style.overflow = 'auto';
//   };
// }, [showThankYou]);

  if (!showThankYou) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-1000 p-4">
      <div className="bg-white p-6 max-w-md text-center text-black overflow-hidden">
        <div className="flex justify-center mb-6">
          <img 
            src="./ThankMe.png"
            alt="Thank you illustration"
            className="w-full max-h-50 object-contain"
          />
        </div>
        <h2 className="font-extrabold text-[#F55252]">THANK YOU FOR REACHING OUT!</h2>
        <p className="text-xl font-bold">We've Received Your Request And Our
        Team Is Reviewing Your Details.</p>
        <p className="my-4">
          Whether you're building your dream home or planning a
          renovation, we're excited to help bring your vision to life.
        Expect a call or email from us within the next 24 hours.</p>
        <button
          onClick={() => setShowThankYou(false)}
          className="mt-6 bg-[#F55252] text-white px-6 py-2 "
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouPopup;