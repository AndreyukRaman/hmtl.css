import Image from "next/image";
import {Montserrat} from 'next/font/google';


const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});



interface Props{
    title:string;
    description:string;
    image:string;
    firstColumnIsImage?:boolean;
}



export default function Hero({title,description,image,firstColumnIsImage = true}:Props){
    return(
        <div className="max-w-[1046px] mx-auto px-6 flex flex-col gap-12">
        <div className={`flex flex-col md:flex-row items-center bg-white gap-6 ${firstColumnIsImage ? "" : "md:flex-row-reverse"} `}>
            <div className="w-full md:w-1/2">
                <Image src={image} alt={title} width={600} height={400} className="w-full h-auto"/>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
                <Image src="/hero-line.svg" alt="hero-line.svg" width={100} height={7}/>
                <h2 className={`${montserrat.className} w-[385px] max-h-auto not-italic font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] flex-none order-1 grow-0`}>{title}</h2>
                <p className={`${montserrat.className} w-[222px] h-[60px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]`}>{description}</p>

 <Image src="/learnmore.svg" alt="learnmore.svg" width={100} height={24}/>
            </div>
        </div>
        </div>
    )
}