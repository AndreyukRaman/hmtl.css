"use client";


import {useEffect,useState} from "react";
import Image from "next/image";
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});

export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll=() =>{
            setIsScrolled(window.scrollY>800);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`${montserrat.className} fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent" }`} >
            <div className="container mx-auto flex items-center justify-between p-6">
                <h3 className={`header-title transition-colors duration-300 ${
            isScrolled ? "!text-[#BDBDBD]" : "!text-white" }`}>Brandname</h3>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className={`font-bold text-[14px] leading-[22px] tracking-[0.2px] ${
                        isScrolled ? "!text-[#BDBDBD]" : "!text-white" } text-right`} >Home</a>
                    <a href="#" className={`font-bold text-[14px] leading-[22px] tracking-[0.2px] ${
                        isScrolled ? "!text-[#BDBDBD]" : "!text-white" } text-right`} >Product</a>
                    <a href="#" className={`font-bold text-[14px] leading-[22px] tracking-[0.2px] ${
                        isScrolled ? "!text-[#BDBDBD]" : "!text-white" } text-right`} >Pricing</a>
                    <a href="#" className={`font-bold text-[14px] leading-[22px] tracking-[0.2px] ${
                        isScrolled ? "!text-[#BDBDBD]" : "!text-white" } text-right`} >Contact</a>

                </nav>
                <div className="hidden md:flex space-x-4">
                    <button className={`font-bold text-[14px] leading-[22px] tracking-[0.2px] ${isScrolled ? "!text-[#BDBDBD]" : "!text-white"} text-right`} >Login</button>
                    <button className={`button2 px-4 py-2 flex items-center gap-2 font-bold text-[14px] leading-[22px] tracking-[0.2px]  ${
                        isScrolled ? "!text-[#BDBDBD]" : "!text-white" }`}>JOIN US
                        <Image src="/arrow.svg" alt="arrow" width={12} height={12}  />
                    </button>
                </div>
            </div>
        </header>

    )
}



/*  <header>

<div className='container'>
    <div className="navbar-toggler">
<div className="navbar-collapse">
            <h3 className="header-title navbar-brand">
                Brandname
            </h3>
            <nav >
                <ul className="navbar-nav">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="navbar-nav2">
                <button>Login</button>
                <button>Join Us</button>
            </div>
</div>
    </div>
</div>

        </header> */