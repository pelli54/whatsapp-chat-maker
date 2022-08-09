import React,{createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext();

const initialState = {
  chatData:[
    //{text:"hello world",date: new Date(),send:true}
	],
	chatInfo:{
		number:"+58 412 5505665",
		status:"En Linea",
		avatar:null
	}
}

export const GlobalProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	const {chatData,chatInfo} = state

  const contextValue = {
		chatData,
		chatInfo,
  	changeText: (id, text) => {
  		dispatch({type:"CHANGETEXT", payload: {id,text}})
		},
  	changeTime: (id, text) => {
  		dispatch({type:"CHANGETIME", payload: {id,text}})
		},
  	changeContact: (text) => {
  		dispatch({type:"CHANGECONTACT", payload: {text}})
		},
  	changeStatus: (text) => {
  		dispatch({type:"CHANGESTATUS", payload: {text}})
		},
  	changeAvatar: (text) => {
  		dispatch({type:"CHANGEAVATAR", payload: {text}})
		},
		addDown: (id) => {
			dispatch({type:"ADDDOWN", payload:{id}})
		},
		addUp: (id) => {
			dispatch({type:"ADDUP", payload:{id}})
		},
		moveUp: (id) => {
			dispatch({type:"MOVEUP", payload:{id}})
		},
		moveDown: (id) => {
			dispatch({type:"MOVEDOWN", payload:{id}})
		},
		deleteOne: (id) =>{
			dispatch({type:"DELETEONE", payload:{id}})
		},
		changeSend: (id) => {
			dispatch({type:"CHANGESEND", payload:{id}})
		},
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

