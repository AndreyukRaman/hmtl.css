import Designer from "./Designer"
import {DesignerData} from "./Designer";

const designersCard : DesignerData[]=[
    {
     image: "./avatar1.svg",
     description: "Slate helps you see how many more days \n" +
         "you need to work to reach your financial \n" +
         "goal for the month and year." ,
        rating: "./stars.svg",
        name: "Benya Kisa",
        title: "Designer",

    },
    {
        image: "./avatar2.svg",
        description: "Slate helps you see how many more days \n" +
            "you need to work to reach your financial \n" +
            "goal for the month and year." ,
        rating: "./stars.svg",
        name: "4ajka Parkhoc",
        title: "Designer",

    }

]

export default function DesignerCard(){
    return (
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {designersCard.map((designer,index)=>(
                <Designer key={index} {...designer}/>
            ))}
        </div>
    )
}