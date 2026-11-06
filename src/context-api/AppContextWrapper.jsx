import { useReducer } from "react";
import { AppContext } from "./AppContext";

const initialState = {
  // Define your initial state here
  searchQuery: "",
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    // Define your action handlers here
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
      case "SET_FILTERED_DATA":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

function AppContextWrapper({ children }) {
  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextWrapper;
