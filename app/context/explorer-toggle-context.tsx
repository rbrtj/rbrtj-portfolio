"use client";

import { type Dispatch, createContext, useReducer } from "react";

type StateType = {
  isHidden: boolean;
};
type ActionType = {
  type: string;
};

const initialState: StateType = {
  isHidden: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "toggle":
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export const ExplorerToggleContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ExplorerToggleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExplorerToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ExplorerToggleContext.Provider>
  );
};
