//Node Modules
import React, {createContext, useContext, useReducer} from "react";

// Types
import { ContentType } from "@/types/hygraph";

const contentActions = {
 setContent: "SET_CONTENT"
};

// TODO: update param types from any
const contentReducer = (state: any, action: any) => {
 switch(action.type) {
  case contentActions.setContent:
   return {...state. action.payload};
  default:
   return state;
 }
};

const initialContentState: ContentType = {
 content: {}
};

const ContentContext = createContext<ContentType>(initialContentState);

type ContentProviderProps = {
 content: ContentType,
 children: JSX.Element
}

const ContentProvider = ({ content = initialContentState, children }: ContentProviderProps) => {
 const [contentState, contentDispatch] = useReducer(
   contentReducer,
   content
 );

// TODO: update param types from any
 const setContent = (content: any) => contentDispatch({type: contentActions.setContent, payload: content});

 const structuredValue = {
  content: {...contentState},
  setContent
 };

 return (
   <ContentContext.Provider value={structuredValue}>
    {children}
   </ContentContext.Provider>
 );
};


function useContentContext(): ContentType {
 let context = useContext(ContentContext);
 if (context === undefined) {
  context = {...initialContentState};
 }
 return context;
}

export { ContentProvider, useContentContext };

