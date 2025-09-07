import DesignerCard from "@/app/components/Designer-card";
import {Montserrat} from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });



export default function Hero4(){
    return (
        <div className="bg-white py-20">
<div className="max-w-[1046px] mx-auto  mb-30 flex px-6 flex-col ">
    <div className="max-w-[700px] h-[130px] gap-3 "></div>
    <h6 className="text-[#FF6551] font-bold text-[14px] mb-2">Testimonials</h6>
    <h2 className={`${montserrat.className} max-w-[500px] font-bold text-[40px] leading-[50px] text-[#26335D]`}>
        Most Popular Courses
    </h2>
    <p className={`${montserrat.className} max-w-[500px]  font-normal text-[14px] leading-[20px] text-[#737373]`}>
        Problems trying to resolve the conflict between
        the two major realms of Classical physics: Newtonian mechanics
    </p>
</div>
            <DesignerCard/>
        </div>
    )
}