"use client"
import React, { createContext, use, type ReactNode } from 'react';
export let userContext = createContext();
const ContextProvider = ({ children }: { children: ReactNode }) => {


   
    



    return (
        <>
            <userContext.Provider value={null}>
                {children}
            </userContext.Provider>

        </>
    );
};

export default ContextProvider;