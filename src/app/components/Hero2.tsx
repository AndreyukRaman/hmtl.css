import Image from "next/image";
import {Montserrat} from "next/font/google";
import Productcard from "@/app/components/Product-card";


const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});



export default function Hero2(){
    return(
        <div className="max-w-[1046px] mx-auto mt-20 px-6 flex flex-col gap-12">
            <div>
                <h6 className="w-[59px] h-[24px] font-montserrat not-italic font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#FF6551] flex-none order-0 grow-0">
                    Courses
                </h6>

                <h2 className={`${montserrat.className} max-w-[385px] max-h-auto not-italic font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] flex-none order-1 grow-0`}>Get Quality Education</h2>
                <p className={`${montserrat.className} max-w-[385px] h-[60px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]`}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div>
                <Productcard/>
            </div>


        </div>
    )
}
