import React, { useReducer } from "react";

const StoreContext = React.createContext({
  addItems: () => {},
});

const defaultStoreContext = {
  item: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

const StoreProvider = (props) => {
  const [storeState, dispatchAction] = useReducer(reducer, defaultStoreContext);

  const addStoreContext = (item) => {
    dispatchAction({ type: "SET_APPEAR", item });
  };

  const storeContext = {
    item: storeState.item,
    addItems: addStoreContext,
  };

  return (
    <StoreContext.Provider value={storeContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
