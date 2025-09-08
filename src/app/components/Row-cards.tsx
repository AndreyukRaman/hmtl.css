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

export default function RowCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4 items-stretch">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
}
