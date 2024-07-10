import { useState } from "react";
import { myContext } from "./context";

export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    auth: {
      token: "",
      name: "",
      movie: {},
      search: "",
    },
  });

  const SetAuth = (target, payload) => {
    setState((prevState) => ({
      ...prevState,
      auth: {
        ...state.auth,
        [target]: payload,
      },
    }));
  };

  return (
    <myContext.Provider value={{ state, SetAuth }}>
      {children}
    </myContext.Provider>
  );
};
