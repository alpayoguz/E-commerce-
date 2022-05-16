import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export const AlertProvider = ({ children }) => {
  const [isAlert, setIsAlert] = useState(false);

  const value = {
    isAlert,
    setIsAlert,
  };
  return (
    <>
      <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
    </>
  );
};
