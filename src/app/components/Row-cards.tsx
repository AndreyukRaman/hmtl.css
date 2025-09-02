import Image from "next/image";


import Card from "@/app/components/Card";

const cardsData= [
    {
        icon: "/row1.svg",
        title: "Lifetime acess",
        description: "The gradual accumulation of\n" +
            "        information about atomic and\n" +
            "        small-scale behaviour...",

    },
    {
        icon: "/row2.svg",
        title: "training Courses",
        description: "The gradual accumulation of \n" +
            "information about atomic and \n" +
            "small-scale behaviour...",

    },
    {
        icon: "/row3.svg",
        title: "Expert instruction",
        description: "The gradual accumulation of \n" +
            "information about atomic and \n" +
            "small-scale behaviour...",

    }

]


export default function RowCards(){
    return(
<div className="flex flex-row items-center gap-[30px] w-[1046px] h-[300px] mx-auto">
    {cardsData.map((card,index)=>(
        <Card  key={index}
               icon={card.icon}
               title={card.title}
               description={card.description}/>
    ))}

</div>
    )
}