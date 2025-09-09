
"use client";


import Image from "next/image";
import {ProductData} from "@/app/components/products.types";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function Product(props: ProductData) {
    const {
        id,
        productImage,
        saleImage,
        likeIcon,
        basketIcon,
        eyeIcon,
        linkText,
        ratingImage,
        title,
        description,
        downloadTop,
        downloadBottom,
        h6Text,
        priceOld,
        priceNew,
        buttonText,
    } = props;

    return (
        <div className="flex flex-col items-start  p-0">
            <div className="relative w-[250px] h-[300px] ">
                <Image src={productImage} alt={title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                    <Image src={saleImage} alt="sale" width={50} height={24} />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <Image src={likeIcon} width={40} height={40} alt="like" />
                    <Image src={basketIcon} width={40} height={40} alt="basket" />
                    <Image src={eyeIcon} width={40} height={40} alt="eye" />
                </div>
            </div>

            <div className="flex flex-col items-start p-4  gap-2 w-full">
                <div className="flex items-center gap-2">
                    <a className={`${montserrat.className} text-[#FF6551] font-bold text-[14px] leading-[24px]`} href="#">
                        {linkText}
                    </a>
                    <Image src={ratingImage} width={50} height={25} alt="rating" />
                </div>

                <h5 className={`${montserrat.className} font-bold text-[16px] leading-[24px] text-[#252B42]`}>
                    {title}
                </h5>

                <p className={`${montserrat.className} font-normal text-[14px] leading-[20px] text-[#737373] max-w-full`}>
                    {description}
                </p>

                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center">
                        <Image src={downloadTop} alt="download top" width={7} height={11} />
                        <Image src={downloadBottom} alt="download bottom" width={16} height={5} />
                    </div>
                    <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373] font-bold`}>
                        {h6Text}
                    </h6>
                </div>

                <div className="flex items-center gap-2">
                    <h5 className={`!${montserrat.className} font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD] flex-none order-none flex-grow-0`}>{priceOld}</h5>
                    <h5 className={`!${montserrat.className} font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#2435A1] flex-none order-1 flex-grow-0`}>{priceNew}</h5>
                </div>

                    <Link href={`/product/${id}`}>
                <button className="  group flex flex-row items-center px-[20px] py-[10px] gap-[10px] w-[141px] h-[44px] border border-[#FF6551] rounded-[37px]  transition-colors duration-200 hover:bg-[#FF6551] hover:scale-105
             cursor-pointer">

                    <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-[#FF6551] font-bold group-hover:text-white`}>
                        {buttonText}
                    </h6>
                </button>
                    </Link>
            </div>
        </div>
    );
}
