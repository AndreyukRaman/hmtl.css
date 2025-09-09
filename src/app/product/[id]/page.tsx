import Link from "next/link";
import {useMemo} from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {productsData} from "@/app/components/Product-card";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

interface Props{
    params: {id:string};
}

export default function ProductPage({params}: Props) {
    const {id} = params;
    const product = useMemo(() => productsData.find((p) => p.id === id), [id]);
    if (!product) return <p className="p-10 text-red-500">No product</p>;

return (

    <div className="p-10 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg max-w-[600px] w-full p-6 flex flex-col gap-4">
            <div className="flex gap-4 mt-4">
                <Link href="/">
                    <button className={`${montserrat.className} button2 px-6 py-3 font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white flex items-center gap-2`}>
                        Home
                    </button>
                </Link>

            </div>

            <div className="relative w-full h-[300px]">
                <Image src={product.productImage} alt={product.title} fill className="object-cover rounded" />
                {product.saleImage && (
                    <div className="absolute top-4 left-4">
                        <Image src={product.saleImage} alt="sale" width={50} height={24} />
                    </div>
                )}

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <Image src={product.likeIcon} width={40} height={40} alt="like" />
                    <Image src={product.basketIcon} width={40} height={40} alt="basket" />
                    <Image src={product.eyeIcon} width={40} height={40} alt="eye" />
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <h1 className={`${montserrat.className} text-2xl font-bold`}>{product.title}</h1>
                <Image src={product.ratingImage} width={50} height={25} alt="rating" />
            </div>

            <span className={`${montserrat.className} text-[#FF6551] font-bold text-[14px]`}>
          {product.linkText}
        </span>

            <p className={`${montserrat.className} text-[#737373]`}>{product.description}</p>

            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <Image src={product.downloadTop} alt="download top" width={7} height={11} />
                    <Image src={product.downloadBottom} alt="download bottom" width={16} height={5} />
                </div>
                <h6 className={`${montserrat.className} font-bold text-[14px]`}>{product.h6Text}</h6>
            </div>

            <div className="flex items-center gap-4">
                <span className={`${montserrat.className} line-through text-gray-400`}>{product.priceOld}</span>
                <span className={`${montserrat.className} font-bold text-[#2435A1]`}>{product.priceNew}</span>
            </div>




        </div>
    </div>
    )
}