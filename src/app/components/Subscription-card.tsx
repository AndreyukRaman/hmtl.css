import Subscription from "./Subscription"
import {SubcriptionData} from "@/app/components/subcription.types";


const subscriptionsData : SubcriptionData[] =[
    {
        circleImage: "./circle.svg",
        free: "FREE",
        h6text: "Organize across all apps by hand",
        price: "19$",
        description: "Slate helps you see how \n" +
            "many more days you need...",
        button: "Try for free",
        list: ["Unlimited product updates","Unlimited product updates","Unlimited product updates", "1GB  Cloud storage","Email and community support"]
    },
    {
        newSub:"New",
        circleImage: "./circle.svg",
        free: "FREE",
        h6text: "Organize across all apps by hand",
        price: "39$",
        description: "Slate helps you see how \n" +
            "many more days you need...",
        button: "Try for free",
        list: ["Unlimited product updates","Unlimited product updates","Unlimited product updates", "1GB  Cloud storage","Email and community support"]
    },
    {
        circleImage: "./circle.svg",
        free: "FREE",
        h6text: "Organize across all apps by hand",
        price: "69$",
        description: "Slate helps you see how \n" +
            "many more days you need...",
        button: "Try for free",
        list: ["Unlimited product updates","Unlimited product updates","Unlimited product updates", "1GB  Cloud storage","Email and community support"]
    },
];

export default function  SubscriptionCard (){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1046px] gap-6 mx-auto">
            {subscriptionsData.map((subscription: SubcriptionData,index) =>( <Subscription key={index} {...subscription}/>
    ))}
        </div>
    )
}