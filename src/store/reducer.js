export const reducer = (state,action) => {
  switch(action.type){
    case "CHANGETEXT":{
      let {id, text: newText} = action.payload
      let newChatData = [...state.chatData]
      newChatData[id].text=newText
      return {chatData:newChatData, ...state}
    }
    case "CHANGETIME":{
      let {id, text: newText} = action.payload
      let newChatData = [...state.chatData]
      console.log(newChatData)
      newChatData[id].date=newText
      return {chatData:newChatData, ...state}
    }
    case "CHANGECONTACT":{
      let {text: newText} = action.payload
      let newChatInfo = state.chatInfo
      newChatInfo.number=newText
      return {chatInfo:newChatInfo, ...state}
    }
    case "CHANGESTATUS":{
      let {text: newText} = action.payload
      let newChatInfo = state.chatInfo
      newChatInfo.status=newText
      return {chatInfo:newChatInfo, ...state}
    }
    case "CHANGEAVATAR":{
      let {text: newText} = action.payload
      let newChatInfo = state.chatInfo
      newChatInfo.avatar=newText
      return {chatInfo:newChatInfo, ...state}
    }
    case "ADDDOWN":{
      let id = action.payload.id
      let newChatData = [...state.chatData]
      let len = newChatData.length
      if(id==null){
        let newBubble = {
          text:"Write a message",
          date: new Date().getHours() + ":" + new Date().getMinutes(),
          send:true
        }
        newChatData.push(newBubble)
        return {...state,chatData:newChatData}
      }
      let left = newChatData.slice(0,id+1)
      let right = newChatData.slice(id+1,len)
      let newBubble={
        text:"Write a message",
        date: new Date().getHours() + ":" + new Date().getMinutes(),
        send:true
      }
      newChatData=[...left,newBubble,...right]
      return {...state,chatData:newChatData}
    }

    case "ADDUP":{
      let id = action.payload.id
      let newChatData = [...state.chatData]
      let len = newChatData.length
      if(id==null){
        return {chatData:[
          {
            text:"Write a message",
            date: new Date().getHours() + ":" + new Date().getMinutes(),
            send:true
          }
        ], ...state}
      }
      let left = newChatData.slice(0,id)
      let right = newChatData.slice(id,len)
      let newBubble={
        text:"Write a message",
        date: new Date().getHours() + ":" + new Date().getMinutes(),
        send:true
      }
      newChatData=[...left,newBubble,...right]
      return {...state,chatData:newChatData}
    }
    case "MOVEUP":{

      let newChatData = [...state.chatData]
      let i = action.payload.id
      if(i===0){
        return state
      }
      let move = newChatData[i]
      newChatData[i] = newChatData[i-1]
      newChatData[i-1] = move
      return {...state,chatData:newChatData}
    }
    case "MOVEDOWN":{
      let newChatData = [...state.chatData]
      let i = action.payload.id
      if(i===newChatData.length-1){
        return state
      }
      let move = newChatData[i]
      newChatData[i] = newChatData[i+1]
      newChatData[i+1] = move
      return {...state,chatData:newChatData}
    }
    case "DELETEONE":{
      let newChatData = [...state.chatData]
      newChatData.splice(action.payload.id, 1)
      return {...state,chatData:newChatData}
    }
    case "CHANGESEND":{
      let newChatData = [...state.chatData]
      newChatData[action.payload.id].send=!newChatData[action.payload.id].send
      return {...state,chatData:newChatData}
    }
    default:{
      return state
    }
  }
}