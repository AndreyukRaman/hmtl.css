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
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll=() =>{
            setIsScrolled(window.scrollY>800);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Product", href: "#product" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className={`${montserrat.className} fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent" }`} >
            <div className="container mx-auto flex items-center justify-between p-6">
                <h3 className={`header-title transition-colors duration-300 ${
            isScrolled ? "!text-[#BDBDBD]" : "!text-white" }`}>Brandname</h3>


                <nav className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`font-bold text-[14px] leading-[22px] tracking-[0.2px] ${
                            isScrolled ? "!text-[#BDBDBD]" : "!text-white" } `} >{link.name}</a>
                    ))}
                </nav>

                <div className="hidden lg:flex space-x-4">
                    <button className={`cursor-pointer font-bold text-[14px] leading-[22px] tracking-[0.2px] ${isScrolled ? "!text-[#BDBDBD]" : "!text-white"} text-right`} >Login</button>
                    <button className={` cursor-pointer  button2 px-4 py-2 flex items-center gap-2 font-bold text-[14px] leading-[22px] tracking-[0.2px]  ${
                        isScrolled ? "!text-[#BDBDBD]" : "!text-white" }`}>JOIN US
                        <Image src="/arrow.svg" alt="arrow" width={12} height={12}  />
                    </button>
                </div>

                <button
                    className="lg:hidden flex flex-col justify-between w-6 h-5 absolute right-6 top-6 z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
  <span
      className={`block h-0.5 w-full rounded ${
          isScrolled ? "bg-[#252B42]" : "bg-white"
      }`}
  ></span>
                    <span
                        className={`block h-0.5 w-full rounded ${
                            isScrolled ? "bg-[#252B42]" : "bg-white"
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-full rounded ${
                            isScrolled ? "bg-[#252B42]" : "bg-white"
                        }`}
                    ></span>
                </button>
                {menuOpen && (
                    <div className="lg:hidden absolute top-full left-0 bg-white/70 backdrop-blur-md shadow-md w-full px-6 py-4 flex flex-col gap-4 z-40">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#252B42]"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex flex-col gap-2 mt-2">
                            <button className="px-4 py-2 font-bold border border-[#FF6551] rounded-md text-[#FF6551] w-auto self-start">
                                Login
                            </button>
                            <button className="px-4 py-2 flex items-center gap-2 font-bold rounded-md bg-[#FF6551] text-white w-auto self-start">
                                JOIN US
                                <Image src="/arrow.svg" alt="arrow" width={12} height={12} />
                            </button>
                        </div>

                    </div>
                )}
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