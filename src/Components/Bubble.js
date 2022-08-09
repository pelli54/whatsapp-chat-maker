import React, {useEffect,useState, useContext} from 'react'
import { GlobalContext } from "../store/Context";

export const Bubble = ({ text, date, send, i}) => {

  const {chatData} = useContext(GlobalContext)

  const [wi, setWi] = useState(0)
  const [he, setHe] = useState(0)

  function reSize(){
    let lines = Math.floor( text.length/39 ) + 1 
    let pad = {
      x:12,
      y:10
    }
    let newWi = 0
    let newHe = (lines*24) + (pad.y*2)
    if(text.length%39<26){
      newWi = (text.length*7) + (pad.x*2) + (send?96:74)
      console.log(send, newWi)
    }else {
      newHe = (lines*24) + (pad.y*2) + 20
      newWi = 999
    }
    return {
      wi:newWi,
      he:newHe
    }
  }

  useEffect(()=>{
    let {wi, he} = reSize()
    setWi(wi)
    setHe(he)
  },[text, send])

  function formatDate(){
    let [h,m] = date.split(":")
    h= h<10?("0"+h):h
    m = m<10?("0"+m):m
    let res = ""
    res = h+":"+m+" "+((new Date(date)).getHours()>12?"p.m.":"a.m.")+" "
    return res
  }

  function isFirstOf(){
    if(i===0 || chatData[i-1].send!==send ){
      return true
    }else{
      return false
    }
  }

  return (
    <div className="burbleCont" >
      <div className={`burble ${send?"send":"recive"} ${isFirstOf()?send?"pointRight":"pointLeft":""}`} style={{width:wi+"px", height:he+"px"}}>
        {text}
        <span className="chatDate">{formatDate()}{send && <i className="bi bi-check2-all"></i>}</span>
      </div>
    </div>
  )
}