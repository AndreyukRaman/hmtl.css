// src/app/components/Hero2.tsx
import ProductCard from "@/app/components/Product-card";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Hero2() {
    return (
        <div id="product" className="bg-white py-20">
            <div className="max-w-[1046px] mx-auto px-6 flex flex-col ">
                <h6 className="text-[#FF6551] font-bold text-[14px] mb-2">Courses</h6>
                <h2 className={`${montserrat.className} max-w-[500px] font-bold text-[40px] leading-[50px] text-[#252B42]`}>
                    Get Quality Education
                </h2>
                <p className={`${montserrat.className} max-w-[500px] mb-20 font-normal text-[14px] leading-[20px] text-[#737373]`}>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>

                {/* Карточки продуктов */}
                <ProductCard />
            </div>
        </div>
    );
}
