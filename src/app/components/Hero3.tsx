
"use client";


import SubscriptionCard from "@/app/components/Subscription-card";
import { useSubscription} from "@/app/components/subscriptionContext";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });

function SubscriptionBlock(){
    const {order, removeFromOrder} = useSubscription();
    if(order.length === 0) return null;

     return (
        <div className="bg-white text-black p-4 rounded mb-6 shadow">
            <h3 className="font-bold mb-2">Your order:</h3>
            <ul className="list-disc list-inside">
                {order.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                        {item}
                        <button
                            onClick={() => removeFromOrder(item)}
                            className="text-red-500 text-sm ml-2"
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default function Hero3() {

    return (

        <div id="pricing" className="bg-[#26335D] py-20">
            <div className="max-w-[1046px] mx-auto px-6 flex flex-col ">
                <SubscriptionBlock/>
                <div className="max-w-[700px] h-[130px] mb-20 gap-3]">
                    <h6 className="text-[#FF6551] font-bold text-[14px] mb-2">Practice Advice</h6>
                    <h2 className={`${montserrat.className} max-w-[500px] font-bold text-[40px] leading-[50px] text-white`}>
                        Most Popular Courses
                    </h2>
                    <p className={`${montserrat.className} max-w-[500px]  font-normal text-[14px] leading-[20px] text-white`}>
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div>
              <SubscriptionCard/>
                </div>
            </div>
        </div>

    )
}