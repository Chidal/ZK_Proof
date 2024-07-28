import React, { createContext, useContext } from 'react';
import zeta from './zetachainConfig';

const ZetachainContext = createContext();

export const ZetachainProvider = ({ children }) => {
  return (
    <ZetachainContext.Provider value={zeta}>
      {children}
    </ZetachainContext.Provider>
  );
};

export const useZetachain = () => useContext(ZetachainContext);
