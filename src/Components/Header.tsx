'use client';

import { useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("BENGALURU");

    const cities = ["BENGALURU", "CHENNAI", "HYDERABAD"];

    const toggleCity = (city: string) => {
        setSelectedCity(city);
        setDropdownOpen(false);
    };

    return (
        // <header
        //     className={`bg-black sm:bg-white shadow-sm p-4 ${mobileOpen ? 'h-[100dvh]' : 'h-auto'
        //         } sm:h-auto transition-all duration-300 overflow-hidden`}
        // >
        <header
            className={`bg-white shadow-sm p-8 ${mobileOpen ? 'h-[100dvh]' : 'h-auto'
                } sm:h-auto transition-all duration-300 overflow-hidden`}
        >
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo + City */}
                <div className="flex flex-col sm:flex-row md:items-baseline sm:items-start gap-4">
                    <h1 className="text-2xl font-bold tracking-tight flex items-center">
                        {/* Logo SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="168" height="33" viewBox="0 0 168 33" fill="none">
                            <path d="M55.2236 7.97663H49.2822V4.13191H55.2236V7.97663ZM101.71 7.97663H95.7686V4.13191H101.71V7.97663Z" fill="#F55252" />
                            <path d="M45.793 14.0373H43.6475C41.6147 14.0373 40.0836 14.6273 39.0547 15.8068C38.0509 16.9863 37.5488 18.5545 37.5488 20.5119V32.0304H32.0156V15.0539H29.2295V9.4445H34.9512V13.8117H36.5322C37.1596 12.306 38.1258 11.1639 39.4307 10.3859C40.7355 9.60799 42.2289 9.21897 43.9102 9.21891H45.793V14.0373ZM15.3965 1.38297C17.2283 1.38301 18.8217 1.71001 20.1768 2.36246C21.5319 2.98986 22.586 3.89294 23.3389 5.07243C24.1168 6.22683 24.5059 7.58192 24.5059 9.13786C24.5059 10.7189 24.0668 12.062 23.1885 13.1662C22.3102 14.2451 21.1808 15.0104 19.8008 15.4621V15.6125C20.93 15.8634 21.9592 16.3275 22.8877 17.005C23.8413 17.6826 24.5934 18.5367 25.1455 19.5656C25.7226 20.5945 26.0117 21.8117 26.0117 23.217C26.0116 24.9484 25.5846 26.4668 24.7314 27.7716C23.9033 29.0514 22.7361 30.0547 21.2305 30.7824C19.75 31.51 18.0314 31.8741 16.0742 31.8742H0V1.38297H15.3965ZM55.1064 31.8566H49.498V9.26969H55.1064V31.8566ZM101.559 31.8566H95.9492V9.26969H101.559V31.8566ZM167.608 31.8361H160.618V26.9425H167.608V31.8361ZM69.9277 16.3332L75.3867 9.21891H81.5596L73.165 20.2482L82.0117 31.8048H75.7246L69.8906 24.0881L64.0176 31.8048H57.8066L66.6533 20.2482L58.2588 9.21891H64.5068L69.9277 16.3332ZM146.42 8.29606C148.729 8.2961 150.711 8.74817 152.367 9.65153C154.023 10.5299 155.304 11.81 156.207 13.4914C157.11 15.1477 157.562 17.1179 157.562 19.4015V21.3586H140.171C140.372 23.2657 141.024 24.7339 142.128 25.7629C143.257 26.7666 144.751 27.2686 146.607 27.2687C147.988 27.2687 149.105 27.0177 149.958 26.5158C150.836 25.9888 151.451 25.2107 151.803 24.1818H157.449C156.922 26.5659 155.705 28.436 153.798 29.7912C151.916 31.1212 149.531 31.7863 146.646 31.7863C144.211 31.7863 142.103 31.3093 140.321 30.3556C138.54 29.3769 137.159 28.0088 136.181 26.2521C135.227 24.4704 134.75 22.3751 134.75 19.966C134.75 17.5569 135.227 15.4866 136.181 13.755C137.134 11.9983 138.489 10.6553 140.246 9.72672C142.003 8.77313 144.061 8.29606 146.42 8.29606ZM121.12 8.75797C124.207 8.75802 126.591 9.61108 128.272 11.3175C129.979 13.024 130.832 15.2954 130.832 18.131V31.758H125.223V19.1857C125.223 17.4042 124.746 16.0488 123.793 15.1203C122.864 14.1918 121.471 13.7267 119.614 13.7267C117.807 13.7267 116.414 14.1917 115.436 15.1203C114.482 16.0488 114.005 17.4041 114.005 19.1857V31.758H108.396V14.7814H105.61V9.17204H111.37V12.7863H112.951C113.804 11.5064 114.896 10.5144 116.227 9.81168C117.557 9.10916 119.188 8.75797 121.12 8.75797ZM90.3535 31.6203H84.7441V0.000160217H90.3535V31.6203ZM5.75977 26.9054H15.0195C16.7009 26.9054 17.994 26.5414 18.8975 25.8136C19.8006 25.0608 20.252 23.9815 20.252 22.5763C20.2519 21.1964 19.8006 20.1549 18.8975 19.4523C17.9941 18.7246 16.7138 18.3605 15.0576 18.3605H5.75977V26.9054ZM146.42 12.7765C144.789 12.7765 143.446 13.1906 142.392 14.0187C141.338 14.8468 140.635 16.0262 140.284 17.5568H152.179C151.953 16.001 151.351 14.8218 150.372 14.0187C149.393 13.1906 148.076 12.7766 146.42 12.7765ZM5.75977 13.7677H14.6055C15.9355 13.7677 16.9526 13.4547 17.6553 12.8273C18.3829 12.1749 18.746 11.2586 18.7461 10.0793C18.7461 8.84967 18.3829 7.92052 17.6553 7.29313C16.9526 6.66574 15.9355 6.3527 14.6055 6.3527H5.75977V13.7677Z" fill="black" />
                            <path d="M160.555 0.0519829H161.832L164.043 5.45185H164.122L166.337 0.0519829H167.633V7H166.607V1.97318H166.542L164.486 6.99067H163.656L161.623 1.96852H161.557V7H160.555V0.0519829Z" fill="black" />
                            <path d="M154.399 0.951957V0.0519791H159.781V0.951957H157.617V7H156.572V0.951957H154.399Z" fill="black" />
                        </svg>
                    </h1>

                    {/* City Dropdown */}
                    <div className="">
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
                            <div className="absolute mt-1 bg-[rgba(245,82,82,0.10)] backdrop-blur-2xl shadow-md w-32 min-w-40 text-right z-[1000]">
                                {cities.map((city) => (
                                    <div
                                        key={city}
                                        onClick={() => toggleCity(city)}
                                        className={`px-3 py-2 text-xs cursor-pointer border-b-1 border-b-[rgba(255,255,255,.2)] text-right flex align-middle gap-2.5 justify-end ${selectedCity === city ? 'font-bold text-white' : 'text-white'
                                            } hover:bg-gray-100 hover:text-black`}
                                    >

                                        {city !== "BENGALURU" && (
                                            <div className="bg-[#F55252] text-white p-1 flex align-middle justify-center">
                                                <span className="text-white text-[6px]">COMING SOON</span>
                                            </div>
                                        )}
                                        {city}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center text-sm font-semibold text-black uppercase">
                    <span className="flex items-center gap-1 text-red-500">
                        <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        HOME
                    </span>
                    <Link href="/about">ABOUT US</Link>
                    <Link href="/how-it-works">HOW IT WORKS</Link>
                    <Link href="/cost-estimator">COST ESTIMATOR</Link>
                    <Link href="/contact-us">CONTACT US</Link>
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
                <div className="md:hidden p-4 text-sm font-semibold text-black uppercase space-y-3">
                    <div className="flex items-center gap-1 text-red-500">
                        <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                        HOME
                    </div>
                    <Link href="/about" className="text-black block">ABOUT US</Link>
                    <Link href="/how-it-works" className="text-black block">HOW IT WORKS</Link>
                    <Link href="/cost-estimator" className="text-black block">COST ESTIMATOR</Link>
                    <Link href="/contact-us" className="text-black block">CONTACT US</Link>
                    <span className="flex items-center gap-1 text-black">
                        <Zap className="w-4 h-4 text-red-500 block" />
                        {/* <span className="text-black">
                            ZERO COST EMI
                        </span> */}
                    </span>
                </div>
            )}
        </header>
    );
}
