"use client";


import {useSubscription} from "@/app/components/subscriptionContext";
import Image from "next/image";
import {SubcriptionData} from "@/app/components/subcription.types";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});


export default function Subscription(props: SubcriptionData){
    const {
        newSub,
    circleImage,
    free,
    h6text,
        price,
    description,
    button,
    list,
    } = props;
const {addToOrder} = useSubscription();
    return (
        <div className=" relative flex flex-col  gap-6 p-10   bg-white">
            {newSub && (
                <span className=" flex items-center justify-center absolute -top-6 -right-6  bg-[#E77C40] text-white text-xs w-15 h-15 font-bold px-3 py-3 rounded-full">
          {newSub}
        </span>
            )}
            <Image src={circleImage} alt={circleImage} width={100} height={100}/>
            <h3 className={`${montserrat.className} max-w-[64px] font-bold text-[24px] leading-[50px] text-[#252B42]`}>
                {free}
            </h3>
            <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373] font-bold`}>
                {h6text}
            </h6>
            <div>
                <h2 className={`${montserrat.className} font-bold text-[40px] leading-[24px] text-[#FF6551]`}>
                    {price}
                </h2>
                <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-[#8EC2F2] font-bold mt-2`}>
                    Per month
                </h6>
            </div>
            <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373] `}>
                {description}
            </h6>
            <button onClick={()=>addToOrder(price)}
                className="flex flex-col items-center px-[40px] py-[15px] gap-[10px]  h-[52px] bg-[#FF6551] rounded-[5px] flex-none  self-stretch flex-grow-0">
                <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-white font-bold`}>
                    {button}
                </h6>
            </button>
            <ul className="space-y-2 text-left w-full">
                {list.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={index < 3 ? "/okgreen.svg" : "/okgray.svg"}
                                alt={index < 3 ? "Green check" : "Gray check"}
                                width={24}
                                height={24}
                                className="block"
                            />
                        </div>
                        <div>
                        <span className={`${montserrat.className} font-bold text-[14px] leading-none break-words tracking-[0.2px] text-[#252B42] flex-none order-1 flex-grow-0`}>{item}</span>
                        </div>
                    </li>
                ))}
            </ul>





        </div>

    )
}