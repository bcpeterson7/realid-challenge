import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
  // Cart items
  const [cart, setCart] = useState({
    plan1: 0,
    plan2: 0,
    plan3: 0,
    creditPlan1: 0,
    creditPlan2: 0,
  });
  const [cartCount, setCartCount] = useState(0);

  return <GlobalContext.Provider value={{ cart, setCart, cartCount, setCartCount }}>{children}</GlobalContext.Provider>;
};

export default AppContext;
