import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});


 export interface DesignerData {
    image: string,
    description: string,
    rating:string,
    name: string,
    title: string,
}



export default function Designer( props: DesignerData ) {
    const { image, description,rating,name,title } = props;
    return (
        <div className="max-w-[500px] flex flex-col items-center gap-3">

                <Image src={image} alt={image} width={128} height={128} className="rounded-full" />
            <p className={`${montserrat.className} max-w-[350px] mx-auto text-center  font-normal text-[14px] leading-[20px] text-[#737373]`}>
                {description}
            </p>
            <Image src={rating} alt={rating} width={130} height={20} />
            <h5 className="text-[#26335D] font-bold text-[16px] mb-2"> {name}</h5>
            <h6 className="text-[#737373] font-bold text-[14px] mb-2">{title}</h6>
        </div>
    )
 }