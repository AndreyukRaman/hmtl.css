"use client";

import {createContext, ReactNode, useContext, useState} from "react";


type SubscriptionContextType = {
    order: string[];
    addToOrder: (state: string) => void;
    removeFromOrder: (state: string) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function useSubscription(){
    const sub =useContext(SubscriptionContext);
    if (!sub) throw new Error("useSubscription must be used within the context!");
    return sub;
}




export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
    const [order, setOrder] = useState<string[]>([]);
    const addToOrder = (item:string) => setOrder((prev)=> [...prev,item])
    const removeFromOrder =(item:string) =>setOrder((prev)=> prev.filter((el)=> el !== item))

return (
    <SubscriptionContext.Provider value={{order, addToOrder, removeFromOrder}}>
        {children}
    </SubscriptionContext.Provider>
)
}

