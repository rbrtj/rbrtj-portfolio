'use client';

import {
  type Dispatch, createContext, useReducer, useMemo,
} from 'react';

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
    case 'toggle':
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export const ExplorerToggleContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export function ExplorerToggleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <ExplorerToggleContext.Provider value={contextValue}>
      {children}
    </ExplorerToggleContext.Provider>
  );
}
