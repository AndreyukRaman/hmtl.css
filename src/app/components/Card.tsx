import Image from "next/image";
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'], // нужные символы
    weight: ['400', '500', '700'], // нужные веса
    variable: '--font-montserrat', // опционально, для CSS переменной
});

interface CardProps{
    title: string;
    description: string;
    icon: string;

}


export default function Card({icon,title, description} : CardProps){
    return(
        <div className="flex flex-col gap-[20px] justify-center items-start pl-[40px] w-[328px] h-[300px]  bg-[#B6D7FF]  bg-white [box-shadow:0px_13px_19px_rgba(0,0,0,0.30)]">



        <Image src={icon} alt={title} width={70} height={76} />
    <h3 className={`${montserrat.className} w-[205px] max-h-auto font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]`}>
        {title}
    </h3>
    <Image src="/red-line.svg" alt="red-line.svg" width={50} height={2} />
    <p className={`${montserrat.className} w-[222px] h-[60px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]`}>
        {description}
    </p>
        </div>
    )
}