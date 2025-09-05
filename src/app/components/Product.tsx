import Image from "next/image";
import {Montserrat} from "next/font/google";


const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});




export default function Product() {
    return (
        <div className="flex flex-col items-center max-w-[238px] p-0">

            <div className="relative w-[250px] h-[300px]">
                <Image src="/product1.svg" alt="product1" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                    <Image src="/sale.svg" alt="sale" width={50} height={24} />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <Image src="/like.svg" width={40} height={40} alt="like" />
                    <Image src="/basket.svg" width={40} height={40} alt="basket" />
                    <Image src="/eye.svg" width={40} height={40} alt="eye" />
                </div>
            </div>


            <div className="flex flex-col items-start p-[25px_25px_35px] gap-2 w-full">

                <div className="flex items-center gap-2">
                    <a className={`${montserrat.className} text-[#FF6551] font-bold text-[14px] leading-[24px]`} href="#">
                        Books Library
                    </a>
                    <Image src="/rating.svg" width={50} height={25} alt="rating" />
                </div>


                <h5 className={`${montserrat.className} font-bold text-[16px] leading-[24px] text-[#252B42]`}>
                    Our Experts Teacher
                </h5>


                <p className={`${montserrat.className} font-normal text-[14px] leading-[20px] text-[#737373] max-w-full`}>
                    We focus on ergonomics and meeting you....
                </p>


                <div className="flex items-center gap-2">

                    <div className="flex flex-col items-center">
                        <Image src="/download.svg" alt="download top" width={7} height={11} />
                        <Image src="/download2.svg" alt="download bottom" width={16} height={5} />
                    </div>

                    <h6 className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373] font-bold`}>
                        15 Sales
                    </h6>
                </div>
                <div className="flex items-center gap-2">
                <h5
                    className={`${montserrat.className} h-[24px]  not-italic font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#BDBDBD] flex-none order-0 grow-0`}
                >
                    $16.48
                </h5>
                <h5
                    className={`${montserrat.className} h-[24px]  not-italic font-bold text-[16px] leading-[24px] text-center tracking-[0.1px] text-[#2435A1] flex-none order-0 grow-0`}
                >
                    $6.48
                </h5>
                </div>

                <button
                    className="flex flex-row items-center px-[20px] py-[10px] gap-[10px] w-[141.14px] h-[44px] border border-[#FF6551] rounded-[37px] flex-none order-5 grow-0"
                >
                    <h6
                        className={`${montserrat.className} h-[24px]  not-italic font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#FF6551] flex-none order-0 grow-0`}
                    >
                       Learn More
                    </h6>

                </button>

            </div>
        </div>

    )
}