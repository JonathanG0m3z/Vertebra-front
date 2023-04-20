import React, { PropsWithChildren, createContext, useState } from "react";



export const EcoTabContext = createContext<EcoTabContextProps>({

});

const EcoTabContextProvider: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <EcoTabContext.Provider>
      {children}
    </EcoTabContext.Provider>
  );
};

export default EcoTabContextProvider;
