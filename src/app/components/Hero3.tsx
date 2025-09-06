import {Montserrat} from "next/font/google";

import SubscriptionCard from "@/app/components/Subscription-card";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });



export default function Hero3() {
    return (

        <div className="bg-[#26335D] py-20">
            <div className="max-w-[1046px] mx-auto px-6 flex flex-col ">
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