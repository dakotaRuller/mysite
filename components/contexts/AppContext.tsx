"use client";

//Node Modules
import React, { createContext, useContext, useReducer } from "react";

// Types
import AppContextTypes from "@/types/app-context";

const stateActions = {
  setInitialLandingLoad: "SET_INITIAL_LANDING_LOAD",
};

// TODO: update param types from any
const appStateReducer = (state: AppContextTypes, action: any) => {
  switch(action.type) {
  case stateActions.setInitialLandingLoad:
    return { ...state, initialLandingLoad: action.payload };
  default:
    return state;
  }
};

const initialAppState: AppContextTypes = {
  initialLandingLoad: false,
  setInitialLandingLoad: () => {}
};

const AppContext = createContext<AppContextTypes>(initialAppState);

type AppStateProviderProps = {
 state: AppContextTypes,
 children: JSX.Element
}

const AppStateProvider = ({ state = initialAppState, children }: AppStateProviderProps) => {
  const [appState, appDispatch] = useReducer(
    appStateReducer,
    state
  );

  // TODO: update param types from any
  const setInitialLandingLoad = (initialLandingLoad: boolean) => appDispatch({ type: stateActions.setInitialLandingLoad, payload: initialLandingLoad });
  const actions = {
    setInitialLandingLoad
  };

  const structuredValue = {
    ...appState,
    ...actions
  };

  return (
    <AppContext.Provider value={structuredValue}>
      {children}
    </AppContext.Provider>
  );
};


function useAppContext(): AppContextTypes {
  let context = useContext(AppContext);
  if (context === undefined) {
    context = { ...initialAppState };
  }
  return context;
}

export { AppStateProvider, useAppContext, initialAppState };

