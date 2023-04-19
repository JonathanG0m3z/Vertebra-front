import React, { PropsWithChildren, createContext, useState } from "react";

interface EcoTabContextProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const EcoTabContext = createContext<EcoTabContextProps>({
  currentTab: "",
  setCurrentTab: () => {},
});

const EcoTabContextProvider: React.FC = ({ children }: PropsWithChildren) => {
  const [currentTab, setCurrentTab] = useState<string>("");

  return (
    <EcoTabContext.Provider>
      {children}
    </EcoTabContext.Provider>
  );
};

export default EcoTabContextProvider;
