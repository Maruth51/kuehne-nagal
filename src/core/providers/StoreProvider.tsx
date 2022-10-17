import React from "react";
import AppStore from "core/state/AppStore";

const StoreContext = React.createContext<AppStore>(new AppStore())

export const useStore = () => React.useContext(StoreContext);

export const StoreProvider: React.FC<{ children: React.ReactNode, store: AppStore}> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};