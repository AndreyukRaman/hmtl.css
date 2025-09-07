"use client";


import {Montserrat} from "next/font/google";
import {useState} from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });


export default function Hero5(){
    const [email, setEmail] = useState("");

    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed with:", email);
        setEmail("")
    }

    return(
    <div className="bg-white py-20" >
    <div className=" max-w-[700px] mx-auto flex flex-col items-center  gap-3 ">
        <h6 className="text-[#FF6551] font-bold text-[14px] mb-2">Newsletter</h6>
        <h2 className={`${montserrat.className} max-w-full font-bold text-[40px] leading-[50px] text-[#26335D]`}>
           Our Popular Courses
        </h2>
        <p className={`${montserrat.className} max-w-[500px] text-center  font-normal text-[14px] leading-[20px] text-[#737373]`}>
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
        </p>
    </div>
        <div className="max-w-[700px] mx-auto flex flex-col items-center pt-20  ">
            <form onSubmit={handleSubmit} className={`${montserrat.className} relative flex flex-row top-0 left-0 right-0 w-full h-[58px] border-1 border-[#E6E6E6]`}>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow px-4 py-3 outline-none placeholder:font-montserrat placeholder:font-normal placeholder:text-[14px] placeholder:leading-[28px] placeholder:tracking-[0.2px] placeholder:text-[#737373]"
                />

                <button
                    className={`${montserrat.className} inset-0 w-[120px] bg-[#FF6551] border border-[#E6E6E6] rounded-tr-[5px] rounded-br-[5px]`}>
                    Subscribe
                </button>


            </form>
        </div>
    </div>
    )
}