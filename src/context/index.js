import { createContext, useContext, useReducer } from "react";

const reducer = () => {};
const initialState = {
  cartCount: 0,
};

const userStateContext = createContext(undefined);
const userDispatchContext = createContext(undefined);

export const useUserState = () => {
  const context = useContext(userStateContext);
  if (!context) throw new Error("No context found in useUserContext");
  return context;
};

export const useUserDispatch = () => {
  const context = useContext(userDispatchContext);
  if (!context) throw new Error("No context found in useUserContext");
  return context;
};

// userProvider
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <userStateContext.Provider value={state}>
      <userDispatchContext.Provider value={dispatch}>
        {children}
      </userDispatchContext.Provider>
    </userStateContext.Provider>
  );
};

export default UserProvider;
