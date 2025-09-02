
import Image from "next/image";
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});

export default function Header(){
    return (
        <header className={`${montserrat.className} my-navigation`} >
            <div className="container mx-auto flex items-center justify-between p-6">
                <h3 className="header-title">Brandname</h3>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className=" font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white text-right">Home</a>
                    <a href="#" className=" font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white text-right">Product</a>
                    <a href="#" className=" font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white text-right">Pricing</a>
                    <a href="#" className=" font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white text-right">Contact</a>
                </nav>
                <div className="hidden md:flex space-x-4">
                    <button className=" font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white text-right">Login</button>
                    <button className="button2 px-4 py-2 flex items-center gap-2 font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white ">JOIN US
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