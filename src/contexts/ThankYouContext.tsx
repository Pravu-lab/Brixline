"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface ThankYouContextType {
  showThankYou: boolean;
  setShowThankYou: (show: boolean) => void;
  showThankYouWithTimeout: () => void;
}

const ThankYouContext = createContext<ThankYouContextType | undefined>(undefined);

export const ThankYouProvider = ({ children }: { children: ReactNode }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const showThankYouWithTimeout = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 10000); // 10 seconds
  };

  return (
    <ThankYouContext.Provider value={{ showThankYou, setShowThankYou, showThankYouWithTimeout }}>
      {children}
    </ThankYouContext.Provider>
  );
};

export const useThankYou = () => {
  const context = useContext(ThankYouContext);
  if (context === undefined) {
    throw new Error('useThankYou must be used within a ThankYouProvider');
  }
  return context;
};