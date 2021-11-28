import React, { useContext, useReducer } from "react";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../action";

import reducer from "../reducers/MM_reducer";

const initialState = {
  isSidebarOpen: false,
};

const MMContext = React.createContext();

export const MMProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <MMContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </MMContext.Provider>
  );
};
// make sure use
export const useMMContext = () => {
  return useContext(MMContext);
};
