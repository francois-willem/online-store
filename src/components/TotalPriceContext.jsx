import React, { createContext, useContext, useState } from 'react';

// Create the context
const TotalPriceContext = createContext();

// Hook to use the context
export const useTotalPrice = () => useContext(TotalPriceContext);

// Provider component
export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (amount) => {
    setTotalPrice((prevPrice) => prevPrice + amount);
  };

  return (
    <TotalPriceContext.Provider value={{ totalPrice, updateTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};
