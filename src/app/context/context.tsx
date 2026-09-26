"use client"
import React, { createContext, useState, type ReactNode, use } from 'react';
import type { ContextValue, Workout } from '../types';

export const userContext = createContext<ContextValue | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, settodaysplan] = useState<Workout[]>([]);
  const [savePlan, setsaveplan] = useState<Workout[]>([]);
  const [active, setactive] = useState<boolean>(false);

  return (
    <>
      <userContext.Provider value={{ todaysPlan, settodaysplan, savePlan, setsaveplan, active, setactive }}>
        {children}
      </userContext.Provider>
    </>
  );
};

export default ContextProvider;

// Custom hook for safe context access
export function useUserContext(): ContextValue {
  const ctx = use(userContext);
  if (!ctx) throw new Error('useUserContext must be used within ContextProvider');
  return ctx;
}