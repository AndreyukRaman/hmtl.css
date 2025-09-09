"use client";


import RowCards from "@/app/components/Row-cards";
import {Montserrat} from "next/font/google";
import {useSubscription} from "@/app/components/subscriptionContext";

const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});

 function SubscriptionBadge(){
    const{order,removeFromOrder} = useSubscription();

    if(!order) return null;

    return (
        <div className="bg-white text-black p-2 rounded-full shadow-md flex  items-center gap-2">
            <h6 className={`${montserrat.className}  font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]`}>Your subscriptions</h6>
            {order.map((item,index) => (
                <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded-full text-sm font-semibold ">
                    <span>{item}</span>
                    <button onClick={()=>removeFromOrder(item)} className="text-red-500 text-sm ml-2" >x</button>
                </div>
            ))}
        </div>
    )
}


export default function HeaderContainer() {

    return(
        <div className=" min-h-screen bg-[url('/background.svg')] bg-cover bg-center pt-[100px]">
            {/*<div className="white-block"></div>*/}
        <div className="flex flex-col items-center gap-8 px-6 py-20 max-w-[1200px] mx-auto relative ">

     <SubscriptionBadge/>
            <h5 className={`${montserrat.className} font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#FFC652]`}>
                Join Us
            </h5>

            <h1 className={`${montserrat.className} font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}>
                HIGH QUALITY <br/> COURSES <br/>
            </h1>

            <h4 className={`${montserrat.className} font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white text-center`}>
                Our goal is to make online education work for everyone
            </h4>

            <button className={`${montserrat.className} button2 px-6 py-3 font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white flex items-center gap-2`}>
                Join us
            </button>

         <RowCards/>

        </div>

        </div>
    )
}

