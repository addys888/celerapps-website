"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { SplashScreen } from "@/components/ui/SplashScreen";

const LoadingContext = createContext({ isLoading: true });

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // We want to handle the overflow on the body
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <SplashScreen onComplete={() => setIsLoading(false)} />
      {children}
    </LoadingContext.Provider>
  );
}
