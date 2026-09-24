"use client"
import React, { createContext,useState, type ReactNode } from 'react';
export const userContext: React.Context<unknown> = createContext();
const ContextProvider = ({ children }: { children: ReactNode }) => {



const [todaysPlan,settodaysplan]=useState([])
const [savePlan,setsaveplan]=useState([])
const [active,setactive]=useState(false)
console.log(todaysPlan)
console.log(savePlan)
    return (
        <>
            <userContext.Provider value={{todaysPlan,settodaysplan,savePlan,setsaveplan,active,setactive}}>
                {children}
            </userContext.Provider>

        </>
    );
};

export default ContextProvider;