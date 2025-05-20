'use client';

import { motion, } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from "react";


export default function Header({ transparent = false, forceWhiteLogo = false, whiteText = false }: { transparent?: boolean, forceWhiteLogo?: boolean, whiteText?: boolean }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownHovered, setDropdownHovered] = useState(false);
    const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("BENGALURU");
const [dropdownTimeout, setDropdownTimeout] = useState(null);
const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

const clearExistingTimeout = () => {
  if (dropdownTimeoutRef.current) {
    clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = null;
  }
};

    const cities = ["BENGALURU", "CHENNAI", "HYDERABAD"];

    const toggleCity = (city: string) => {
        setSelectedCity(city);
        setDropdownOpen(false);
    };

    const pathname = usePathname();

    const ref = useRef<HTMLDivElement | null>(null);
    const [isStuck, setIsStuck] = useState(false);
  
    useEffect(() => {
      let ticking = false;
  
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const top = ref.current?.getBoundingClientRect().top ?? 1;
  
            // Consider "stuck" when it's at or above the top
            const stuck = top <= 0;
  
            setIsStuck(prev => {
              // Only update if the value has actually changed
              if (prev !== stuck) return stuck;
              return prev;
            });
  
            ticking = false;
          });
          ticking = true;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
       
        <motion.header 
        ref={ref}
        className={` ${transparent ? 'bg-transparent' : 'bg-white'} p-4 ${mobileOpen ? 'h-[100dvh] mobileHeader !bg-black' : 'h-auto'
        } sm:h-auto transition-all duration-300 sticky top-0 w-screen z-[999]`}
        animate={{ opacity: isStuck ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      
        >
            
            <div className="max-w-screen-4xl md:px-20 mx-auto flex justify-between items-center">
                {/* Logo + City */}
                <div className="flex flex-col sm:flex-row md:items-baseline sm:items-start gap-1 md:gap-4">
                    <h1 className="text-2xl font-bold tracking-tight flex items-center">
                        {/* Logo SVG */}
                        <Link href="/">
                        {mobileOpen ? (
                            <svg width="168" height="33" viewBox="0 0 168 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55.2239 7.97663H49.2825V4.13191H55.2239V7.97663ZM101.71 7.97663H95.7688V4.13191H101.71V7.97663Z" fill="#F55252"/>
<path d="M45.793 14.0373H43.6475C41.6147 14.0373 40.0836 14.6273 39.0547 15.8068C38.0509 16.9863 37.5488 18.5545 37.5488 20.5119V32.0304H32.0156V15.0539H29.2295V9.4445H34.9512V13.8117H36.5322C37.1596 12.306 38.1258 11.1639 39.4307 10.3859C40.7355 9.60799 42.2289 9.21897 43.9102 9.21891H45.793V14.0373ZM15.3965 1.38297C17.2283 1.38301 18.8217 1.71001 20.1768 2.36246C21.5319 2.98986 22.586 3.89294 23.3389 5.07243C24.1168 6.22683 24.5059 7.58192 24.5059 9.13786C24.5059 10.7189 24.0668 12.062 23.1885 13.1662C22.3102 14.2451 21.1808 15.0104 19.8008 15.4621V15.6125C20.93 15.8634 21.9592 16.3275 22.8877 17.005C23.8413 17.6826 24.5934 18.5367 25.1455 19.5656C25.7226 20.5945 26.0117 21.8117 26.0117 23.217C26.0116 24.9484 25.5846 26.4668 24.7314 27.7716C23.9033 29.0514 22.7361 30.0547 21.2305 30.7824C19.75 31.51 18.0314 31.8741 16.0742 31.8742H0V1.38297H15.3965ZM55.1064 31.8566H49.498V9.26969H55.1064V31.8566ZM101.559 31.8566H95.9492V9.26969H101.559V31.8566ZM167.608 31.8361H160.618V26.9425H167.608V31.8361ZM69.9277 16.3332L75.3867 9.21891H81.5596L73.165 20.2482L82.0117 31.8048H75.7246L69.8906 24.0881L64.0176 31.8048H57.8066L66.6533 20.2482L58.2588 9.21891H64.5068L69.9277 16.3332ZM146.42 8.29606C148.729 8.2961 150.711 8.74817 152.367 9.65153C154.023 10.5299 155.304 11.81 156.207 13.4914C157.11 15.1477 157.562 17.1179 157.562 19.4015V21.3586H140.171C140.372 23.2657 141.024 24.7339 142.128 25.7629C143.257 26.7666 144.751 27.2686 146.607 27.2687C147.988 27.2687 149.105 27.0177 149.958 26.5158C150.836 25.9888 151.451 25.2107 151.803 24.1818H157.449C156.922 26.5659 155.705 28.436 153.798 29.7912C151.916 31.1212 149.531 31.7863 146.646 31.7863C144.211 31.7863 142.103 31.3093 140.321 30.3556C138.54 29.3769 137.159 28.0088 136.181 26.2521C135.227 24.4704 134.75 22.3751 134.75 19.966C134.75 17.5569 135.227 15.4866 136.181 13.755C137.134 11.9983 138.489 10.6553 140.246 9.72672C142.003 8.77313 144.061 8.29606 146.42 8.29606ZM121.12 8.75797C124.207 8.75802 126.591 9.61108 128.272 11.3175C129.979 13.024 130.832 15.2954 130.832 18.131V31.758H125.223V19.1857C125.223 17.4042 124.746 16.0488 123.793 15.1203C122.864 14.1918 121.471 13.7267 119.614 13.7267C117.807 13.7267 116.414 14.1917 115.436 15.1203C114.482 16.0488 114.005 17.4041 114.005 19.1857V31.758H108.396V14.7814H105.61V9.17204H111.37V12.7863H112.951C113.804 11.5064 114.896 10.5144 116.227 9.81168C117.557 9.10916 119.188 8.75797 121.12 8.75797ZM90.3535 31.6203H84.7441V0.000160217H90.3535V31.6203ZM5.75977 26.9054H15.0195C16.7009 26.9054 17.994 26.5414 18.8975 25.8136C19.8006 25.0608 20.252 23.9815 20.252 22.5763C20.2519 21.1964 19.8006 20.1549 18.8975 19.4523C17.9941 18.7246 16.7138 18.3605 15.0576 18.3605H5.75977V26.9054ZM146.42 12.7765C144.789 12.7765 143.446 13.1906 142.392 14.0187C141.338 14.8468 140.635 16.0262 140.284 17.5568H152.179C151.953 16.001 151.351 14.8218 150.372 14.0187C149.393 13.1906 148.076 12.7766 146.42 12.7765ZM5.75977 13.7677H14.6055C15.9355 13.7677 16.9526 13.4547 17.6553 12.8273C18.3829 12.1749 18.746 11.2586 18.7461 10.0793C18.7461 8.84967 18.3829 7.92052 17.6553 7.29313C16.9526 6.66574 15.9355 6.3527 14.6055 6.3527H5.75977V13.7677Z" fill="white"/>
<path d="M160.554 0.0519829H161.832L164.042 5.45185H164.121L166.336 0.0519829H167.633V7H166.607V1.97318H166.542L164.485 6.99067H163.655L161.622 1.96852H161.557V7H160.554V0.0519829Z" fill="white"/>
<path d="M154.399 0.951957V0.0519791H159.78V0.951957H157.616V7H156.572V0.951957H154.399Z" fill="white"/>
</svg>
):
    forceWhiteLogo ? (
        // <div style="display: flex; align-items: center; gap: 20px;">
   <svg width="143" height="29" viewBox="0 0 143 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.0283 7.79297H41.9688V4.51855H47.0283V7.79297ZM86.6162 7.79297H81.5557V4.51855H86.6162V7.79297Z" fill="#F55252"/>
<path d="M38.9971 12.9541H37.1699C35.4388 12.9541 34.135 13.4565 33.2588 14.4609C32.404 15.4654 31.9766 16.8009 31.9766 18.4678V28.2773H27.2637V13.8193H24.8916V9.04297H29.7646V12.7617H31.1104C31.6446 11.4795 32.4679 10.5072 33.5791 9.84473C34.6903 9.18228 35.9618 8.85065 37.3936 8.85059H38.9971V12.9541ZM13.1113 2.17773C14.6714 2.17774 16.0286 2.45511 17.1826 3.01074C18.3366 3.54502 19.2339 4.31491 19.875 5.31934C20.5375 6.30239 20.8691 7.45628 20.8691 8.78125C20.8691 10.1276 20.4951 11.2716 19.7471 12.2119C18.9992 13.1307 18.0375 13.7823 16.8623 14.167V14.2949C17.8238 14.5086 18.6996 14.9045 19.4902 15.4814C20.3023 16.0585 20.9439 16.7849 21.4141 17.6611C21.9056 18.5373 22.1513 19.5738 22.1514 20.7705C22.1514 22.2451 21.7881 23.5381 21.0615 24.6494C20.3563 25.7393 19.3623 26.5941 18.0801 27.2139C16.8192 27.8336 15.3554 28.1435 13.6885 28.1436H0V2.17773H13.1113ZM46.9287 28.1279H42.1523V8.89355H46.9287V28.1279ZM86.4863 28.1279H81.71V8.89355H86.4863V28.1279ZM142.734 28.1123H136.781V23.9453H142.734V28.1123ZM59.5498 14.9092L64.1982 8.85059H69.4561L62.3066 18.2432L69.8408 28.085H64.4873L59.5176 21.5137L54.5176 28.085H49.2275L56.7607 18.2432L49.6123 8.85059H54.9336L59.5498 14.9092ZM124.689 8.06543C126.656 8.06543 128.344 8.45036 129.755 9.21973C131.165 9.96768 132.255 11.0575 133.024 12.4893C133.794 13.8998 134.179 15.5777 134.179 17.5225V19.1895H119.368C119.539 20.8136 120.095 22.0642 121.035 22.9404C121.997 23.7951 123.268 24.2226 124.85 24.2227C126.025 24.2227 126.977 24.0085 127.703 23.5811C128.451 23.1323 128.974 22.4698 129.273 21.5938H134.082C133.633 23.6239 132.597 25.2161 130.973 26.3701C129.37 27.5027 127.339 28.0693 124.882 28.0693C122.809 28.0693 121.013 27.6627 119.496 26.8506C117.979 26.0171 116.804 24.8523 115.971 23.3564C115.159 21.8391 114.752 20.0545 114.752 18.0029C114.752 15.9514 115.159 14.1884 115.971 12.7139C116.783 11.218 117.937 10.0749 119.433 9.28418C120.929 8.47211 122.681 8.06547 124.689 8.06543ZM103.145 8.45801C105.773 8.45801 107.803 9.18462 109.235 10.6377C110.689 12.0909 111.415 14.0255 111.415 16.4404V28.0449H106.639V17.3379C106.639 15.8207 106.233 14.6667 105.421 13.876C104.63 13.0852 103.444 12.6895 101.862 12.6895C100.324 12.6895 99.1372 13.0853 98.3037 13.876C97.4918 14.6667 97.0859 15.8207 97.0859 17.3379V28.0449H92.3096V13.5869H89.9375V8.81055H94.8418V11.8887H96.1885C96.9151 10.7987 97.8449 9.95386 98.9775 9.35547C100.11 8.7572 101.499 8.45803 103.145 8.45801ZM76.9443 27.9277H72.168V1H76.9443V27.9277ZM4.9043 23.9121H12.791C14.2227 23.9121 15.3235 23.6021 16.0928 22.9824C16.862 22.3413 17.2471 21.4223 17.2471 20.2256C17.247 19.0504 16.8619 18.1638 16.0928 17.5654C15.3235 16.9457 14.2335 16.6358 12.8232 16.6357H4.9043V23.9121ZM124.689 11.8809C123.3 11.8809 122.157 12.2333 121.26 12.9385C120.362 13.6436 119.764 14.6478 119.465 15.9512H129.595C129.402 14.6264 128.889 13.6223 128.056 12.9385C127.222 12.2332 126.1 11.8809 124.689 11.8809ZM4.9043 12.7246H12.4385C13.571 12.7245 14.4368 12.4571 15.0352 11.9229C15.6547 11.3673 15.9638 10.5872 15.9639 9.58301C15.9639 8.53607 15.6546 7.74521 15.0352 7.21094C14.4368 6.67672 13.571 6.40924 12.4385 6.40918H4.9043V12.7246Z" fill="white"/>
<path d="M137.874 0.856812H138.793L140.384 4.74272H140.441L142.035 0.856812H142.968V5.85681H142.23V2.23936H142.183L140.703 5.8501H140.105L138.642 2.23601H138.595V5.85681H137.874V0.856812Z" fill="white"/>
<path d="M133.444 1.50446V0.856812H137.317V1.50446H135.76V5.85681H135.008V1.50446H133.444Z" fill="white"/>
</svg>

    ) : (
  <svg width="143" height="29" viewBox="0 0 143 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.0283 7.79297H41.9688V4.51855H47.0283V7.79297ZM86.6162 7.79297H81.5557V4.51855H86.6162V7.79297Z" fill="#F55252"/>
<path d="M38.9971 12.9541H37.1699C35.4388 12.9541 34.135 13.4565 33.2588 14.4609C32.404 15.4654 31.9766 16.8009 31.9766 18.4678V28.2773H27.2637V13.8193H24.8916V9.04297H29.7646V12.7617H31.1104C31.6446 11.4795 32.4679 10.5072 33.5791 9.84473C34.6903 9.18228 35.9618 8.85065 37.3936 8.85059H38.9971V12.9541ZM13.1113 2.17773C14.6714 2.17774 16.0286 2.45511 17.1826 3.01074C18.3366 3.54502 19.2339 4.31491 19.875 5.31934C20.5375 6.30239 20.8691 7.45628 20.8691 8.78125C20.8691 10.1276 20.4951 11.2716 19.7471 12.2119C18.9992 13.1307 18.0375 13.7823 16.8623 14.167V14.2949C17.8238 14.5086 18.6996 14.9045 19.4902 15.4814C20.3023 16.0585 20.9439 16.7849 21.4141 17.6611C21.9056 18.5373 22.1513 19.5738 22.1514 20.7705C22.1514 22.2451 21.7881 23.5381 21.0615 24.6494C20.3563 25.7393 19.3623 26.5941 18.0801 27.2139C16.8192 27.8336 15.3554 28.1435 13.6885 28.1436H0V2.17773H13.1113ZM46.9287 28.1279H42.1523V8.89355H46.9287V28.1279ZM86.4863 28.1279H81.71V8.89355H86.4863V28.1279ZM142.734 28.1123H136.781V23.9453H142.734V28.1123ZM59.5498 14.9092L64.1982 8.85059H69.4561L62.3066 18.2432L69.8408 28.085H64.4873L59.5176 21.5137L54.5176 28.085H49.2275L56.7607 18.2432L49.6123 8.85059H54.9336L59.5498 14.9092ZM124.689 8.06543C126.656 8.06543 128.344 8.45036 129.755 9.21973C131.165 9.96768 132.255 11.0575 133.024 12.4893C133.794 13.8998 134.179 15.5777 134.179 17.5225V19.1895H119.368C119.539 20.8136 120.095 22.0642 121.035 22.9404C121.997 23.7951 123.268 24.2226 124.85 24.2227C126.025 24.2227 126.977 24.0085 127.703 23.5811C128.451 23.1323 128.974 22.4698 129.273 21.5938H134.082C133.633 23.6239 132.597 25.2161 130.973 26.3701C129.37 27.5027 127.339 28.0693 124.882 28.0693C122.809 28.0693 121.013 27.6627 119.496 26.8506C117.979 26.0171 116.804 24.8523 115.971 23.3564C115.159 21.8391 114.752 20.0545 114.752 18.0029C114.752 15.9514 115.159 14.1884 115.971 12.7139C116.783 11.218 117.937 10.0749 119.433 9.28418C120.929 8.47211 122.681 8.06547 124.689 8.06543ZM103.145 8.45801C105.773 8.45801 107.803 9.18462 109.235 10.6377C110.689 12.0909 111.415 14.0255 111.415 16.4404V28.0449H106.639V17.3379C106.639 15.8207 106.233 14.6667 105.421 13.876C104.63 13.0852 103.444 12.6895 101.862 12.6895C100.324 12.6895 99.1372 13.0853 98.3037 13.876C97.4918 14.6667 97.0859 15.8207 97.0859 17.3379V28.0449H92.3096V13.5869H89.9375V8.81055H94.8418V11.8887H96.1885C96.9151 10.7987 97.8449 9.95386 98.9775 9.35547C100.11 8.7572 101.499 8.45803 103.145 8.45801ZM76.9443 27.9277H72.168V1H76.9443V27.9277ZM4.9043 23.9121H12.791C14.2227 23.9121 15.3235 23.6021 16.0928 22.9824C16.862 22.3413 17.2471 21.4223 17.2471 20.2256C17.247 19.0504 16.8619 18.1638 16.0928 17.5654C15.3235 16.9457 14.2335 16.6358 12.8232 16.6357H4.9043V23.9121ZM124.689 11.8809C123.3 11.8809 122.157 12.2333 121.26 12.9385C120.362 13.6436 119.764 14.6478 119.465 15.9512H129.595C129.402 14.6264 128.889 13.6223 128.056 12.9385C127.222 12.2332 126.1 11.8809 124.689 11.8809ZM4.9043 12.7246H12.4385C13.571 12.7245 14.4368 12.4571 15.0352 11.9229C15.6547 11.3673 15.9638 10.5872 15.9639 9.58301C15.9639 8.53607 15.6546 7.74521 15.0352 7.21094C14.4368 6.67672 13.571 6.40924 12.4385 6.40918H4.9043V12.7246Z" fill="black"/>
<path d="M137.874 0.856812H138.793L140.384 4.74272H140.441L142.035 0.856812H142.968V5.85681H142.23V2.23936H142.183L140.703 5.8501H140.105L138.642 2.23601H138.595V5.85681H137.874V0.856812Z" fill="black"/>
<path d="M133.444 1.50446V0.856812H137.317V1.50446H135.76V5.85681H135.008V1.50446H133.444Z" fill="black"/>
</svg>

       
    
)}            
                        </Link>
                    </h1>

                    {/* City Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-1 px-4 py-1 bg-[rgba(245,82,82,0.1)] text-red-600 text-xs font-semibold rounded"
                        >
                            {selectedCity}
                            {dropdownOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <rect width="12" height="12" transform="matrix(-1 0 0 1 12 0.5)" fill="#F55252" />
                                    <rect width="5.2" height="1.2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.5254 7.7)" fill="white" />
                                    <rect width="5.2" height="1.2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.323 8.54853)" fill="white" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <rect width="12" height="12" transform="matrix(-1 0 0 1 12 0.5)" fill="#F55252" />
                                    <rect width="5.2" height="1.2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.7 4.5)" fill="white" />
                                    <rect width="5.2" height="1.2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.5 4.5)" fill="white" />
                                </svg>
                            )}
                        </button>

                       {dropdownOpen && (
    <div className="fixed top-22 md:top-14 mt-1 bg-[rgba(245,82,82,0.10)] backdrop-blur-2xl shadow-md w-32 min-w-40 text-left z-[1000]">
        {cities
        .filter(city => city != selectedCity)
        .map((city) => (
            <div
                key={city}
                onClick={() => toggleCity(city)}
                className={`px-3 py-2 text-xs cursor-pointer border-b-1 border-b-[rgba(255,255,255,.2)] flex items-center justify-between ${selectedCity === city ? 'font-bold text-white' : 'text-white'} hover:bg-black hover:text-white`}
            >
                <div className="flex items-center">
                    {city !== "BENGALURU" && (
                        <div className="bg-[#F55252] text-white p-1 mr-2">
                            <span className="text-[10px] whitespace-nowrap">Coming Soon</span>
                        </div>
                    )}
                </div>
                <div>
                    {city}
                </div>
            </div>
        ))}
    </div>
)}
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex gap-6  items-center text-sm font-semibold ${whiteText ? 'text-white' : 'text-black'} uppercase sticky top-0`}>
                    <Link href="/" className={`flex items-center gap-1 ${pathname === '/' ? 'text-red-500' : ''}`}>
                        {pathname === '/' && (
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        )}
                        HOME
                    </Link>

                    <Link href="/about" className={`flex items-center gap-1 ${pathname === '/about' ? 'text-red-500' : ''}`}>
                        {pathname === '/about' && (
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        )}
                        ABOUT US
                    </Link>

                    <Link href="/how-it-works" className={` flex items-center gap-1 ${pathname === '/how-it-works' ? 'text-red-500' : ''}`}>
                        {pathname === '/how-it-works' && (
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        )}
                        HOW IT WORKS
                    </Link>

                    <Link href="/cost-estimator" className={`flex items-center gap-1 ${pathname === '/cost-estimator' ? 'text-red-500' : ''}`}>
                        {pathname === '/cost-estimator' && (
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        )}
                        COST ESTIMATOR
                    </Link>

                   <div
  className="relative"
  onMouseEnter={() => {
    clearExistingTimeout();
    setMoreDropdownOpen(true);
  }}
  onMouseLeave={() => {
    // Start timeout only when leaving the main button area
    dropdownTimeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 300);
  }}
>
  <button
    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
    className={`flex items-center gap-1 ${whiteText ? 'text-white' : 'text-black'} ${pathname === '/contact-us' || pathname === '/career' || moreDropdownOpen ? 'text-red-500' : ''}`}
  >
    MORE
    {moreDropdownOpen ?
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <rect width="5.2" height="1.2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.5254 7.7)" fill="red" />
        <rect width="5.2" height="1.2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.323 8.54853)" fill="red" />
      </svg>
      : 
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.506 1.70233L10.0029 0.19928L5.99661 4.2056L1.99036 0.199342L0.487305 1.70239L4.49544 5.71053L5.99667 4.2093L7.49785 5.71047L11.506 1.70233Z" fill={whiteText ? 'white' : 'black'}/>
      </svg>
    }
  </button>

  {moreDropdownOpen && (
    <div
      className="absolute mt-4 right-0 bg-red-100 shadow-md min-w-40 z-[9999]"
      onMouseEnter={clearExistingTimeout}
      onMouseLeave={() => {
        setMoreDropdownOpen(false);
      }}
    >
      <Link 
        href="/contact-us"
        className={`block px-4 py-2 text-sm ${pathname === '/contact-us' ? 'text-red-500' : 'text-black'} hover:bg-gray-100`}
        onClick={() => setMoreDropdownOpen(false)}
      >
        CONTACT US
      </Link>
      <Link
        href="/career"
        className={`block px-4 py-2 text-sm ${pathname === '/career' ? 'text-red-500' : 'text-black'} hover:bg-gray-100`}
        onClick={() => setMoreDropdownOpen(false)}
      >
        Career
      </Link>
    </div>
  )}
</div>

                    <Link href="/zero-cost-emi" className={`flex items-center gap-1 ${pathname === '/zero-cost-emi' ? 'text-red-500' : ''}`}>
                        {pathname === '/zero-cost-emi' && (
                            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        )}
                        ZERO COST EMI
                    </Link>
                    {/* <span className="flex items-center gap-1 text-black">
                        <Zap className="w-4 h-4 text-red-500" />
                        ZERO COST EMI
                    </span> */}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                                <path d="M44.2734 37.4619H0V9.44824L10.5137 0.632812H44.2734V37.4619Z" fill="#F55252" />
                                <path d="M30.3672 12.7539L16.2246 26.8965L14.1035 24.7754L28.2461 10.6328L30.3672 12.7539Z" fill="white" />
                                <path d="M30.4707 24.5264L28.3867 26.6846L14 12.791L16.084 10.6328L30.4707 24.5264Z" fill="white" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                                <path d="M44.2735 37.1965H0V9.1827L10.5133 0.367188H44.2735V37.1965Z" fill="#F55252" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13 12H33V15H13V12ZM13 18H33V21H13V18ZM33 24H13V27H33V24Z"
                                    fill="white"
                                />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Nav Menu */}
            {mobileOpen && (
                    <div className="md:hidden p-4 text-lg font-semibold text-white uppercase space-y-4 py-20">
                      {/* <div className={`${pathname === '/home' ? 'flex items-center justify-between gap-1 text-red-500' : " "}`}>
                        HOME
                        {pathname === '/home' && (
                               <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        )
                        }
                      </div> */}
        <Link href="/" className={`flex items-center justify-between ${pathname === '/' ? 'text-red-500' : ''}`}>
            HOME
            {pathname === '/' && (
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            )}
        </Link>
                      
        <Link href="/about" className={`flex items-center justify-between ${pathname === '/about' ? 'text-red-500' : ''}`}>
            ABOUT US
            {pathname === '/about' && (
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            )}
        </Link>
        <Link href="/how-it-works" className={`flex items-center justify-between ${pathname === '/how-it-works' ? 'text-red-500' : ''}`}>
            HOW IT WORKS
            {pathname === '/how-it-works' && (
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            )}
        </Link>
        <Link href="/cost-estimator" className={`flex items-center justify-between ${pathname === '/cost-estimator' ? 'text-red-500' : ''}`}>
            COST ESTIMATOR
            {pathname === '/cost-estimator' && (
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            )}
        </Link>
       <div className="relative">
  <button 
    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
    className={`flex items-center justify-between w-full ${pathname === '/contact-us' ? 'text-red-500' : ''}`}
  >
    MORE
    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.506 1.70233L10.0029 0.19928L5.99661 4.2056L1.99036 0.199342L0.487305 1.70239L4.49544 5.71053L5.99667 4.2093L7.49785 5.71047L11.506 1.70233Z" fill="white"/>
    </svg>
  </button>

  {moreDropdownOpen && (
    <div className="pl-4">
      <Link 
        href="/contact-us" 
        className={`block py-2 ${pathname === '/contact-us' ? 'text-red-500' : ''}`}
        onClick={() => setMoreDropdownOpen(false)}
      >
        CONTACT US
      </Link>
      <Link
        href="/career" 
        className={`block py-2 ${pathname === '/career' ? 'text-red-500' : ''}`}
        onClick={() => setMoreDropdownOpen(false)}
      >
        CAREER 
      </Link>
    </div>
  )}
</div>
        <Link href="/zero-cost-emi" className={`flex items-center justify-between ${pathname === '/zero-cost-emi' ? 'text-red-500' : ''}`}>
            ZERO COST EMI
            {pathname === '/zero-cost-emi' && (
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            )}
        </Link>
                      {/* <span className="flex items-center gap-1 ">
                        <Zap className="w-4 h-4 text-red-500 block" />
                        <span className="text-black">
                                      ZERO COST EMI
                                  </span>
                      </span> */}
                      <div className='flex justify-between flex-col pt-10 gap-[18px]'>
                      <h4 className="text-[10px]/[140%] text-white opacity-60 font-semibold sm:mb-3 py-3">FOLLOW US</h4>
                      <div className="flex space-x-4 text-xl">
                        <a href="#">  {/* Twitter */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M22 4.82815C22 4.82815 21.3 6.92815 20 8.22815C21.6 18.2281 10.6 25.5281 2 19.8281C4.2 19.9281 6.4 19.2281 8 17.8281C3 16.3281 0.5 10.4281 3 5.82815C5.2 8.42815 8.6 9.92815 12 9.82815C11.1 5.62815 16 3.22815 19 6.02815C20.1 6.02815 22 4.82815 22 4.82815Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <a href="#"> {/* linkedIn */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M16 8.82812C17.5913 8.82812 19.1174 9.46027 20.2426 10.5855C21.3679 11.7107 22 13.2368 22 14.8281V21.8281H18V14.8281C18 14.2977 17.7893 13.789 17.4142 13.4139C17.0391 13.0388 16.5304 12.8281 16 12.8281C15.4696 12.8281 14.9609 13.0388 14.5858 13.4139C14.2107 13.789 14 14.2977 14 14.8281V21.8281H10V14.8281C10 13.2368 10.6321 11.7107 11.7574 10.5855C12.8826 9.46027 14.4087 8.82812 16 8.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 9.82812H2V21.8281H6V9.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 6.82812C5.10457 6.82812 6 5.93269 6 4.82812C6 3.72356 5.10457 2.82812 4 2.82812C2.89543 2.82812 2 3.72356 2 4.82812C2 5.93269 2.89543 6.82812 4 6.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg> 
                        </a>
                        <a href="#">  {/* facebook */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M18 2.82812H15C13.6739 2.82813 12.4021 3.35491 11.4645 4.29259C10.5268 5.23027 10 6.50204 10 7.82812V10.8281H7V14.8281H10V22.8281H14V14.8281H17L18 10.8281H14V7.82812C14 7.56291 14.1054 7.30855 14.2929 7.12102C14.4804 6.93348 14.7348 6.82812 15 6.82812H18V2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <a href="#"> {/* ig */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M17 2.82812H7C4.23858 2.82812 2 5.0667 2 7.82812V17.8281C2 20.5895 4.23858 22.8281 7 22.8281H17C19.7614 22.8281 22 20.5895 22 17.8281V7.82812C22 5.0667 19.7614 2.82812 17 2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.9997 12.1984C16.1231 13.0307 15.981 13.8806 15.5935 14.6274C15.206 15.3742 14.5929 15.9798 13.8413 16.3581C13.0898 16.7364 12.2382 16.868 11.4075 16.7344C10.5768 16.6007 9.80947 16.2085 9.21455 15.6136C8.61962 15.0187 8.22744 14.2513 8.09377 13.4206C7.96011 12.59 8.09177 11.7383 8.47003 10.9868C8.84829 10.2353 9.45389 9.62217 10.2007 9.23467C10.9475 8.84717 11.7975 8.70501 12.6297 8.82843C13.4786 8.95431 14.2646 9.34989 14.8714 9.95673C15.4782 10.5636 15.8738 11.3495 15.9997 12.1984Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5 7.32812H17.51" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>{/* mobile menu bottom image */}
                    <div> <Image 
                      src="/mobileimage.png" 
                      alt="decorative-shape"
                      height={500}
                      width={500}
                      className="object-cover w-full absolute bottom-0 left-0 z-10 block sm:hidden"
                    />
                    </div>
                    </div>
            )}
        </motion.header>
    );
}