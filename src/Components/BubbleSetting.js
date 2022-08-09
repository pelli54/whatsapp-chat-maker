import React,{useState, useContext} from 'react'
import { GlobalContext } from "../store/Context";


 export const BubbleSetting = ({text,date,send,index}) => {
  const [open, setOpen] = useState(false)

  const {changeText, changeTime, addDown, addUp, moveUp, moveDown, deleteOne, changeSend} = useContext(GlobalContext)


  if(open){
    return (
      <div className={`card p-2 my-2 ${send?"send":"recive"}`}>
      <div className="mb-3 d-flex justify-content-between">
        <div>
          <button className="btn text-light btn-sm bi bi-arrow-bar-up" onClick={() => moveUp(index)}></button>
          <button className="btn text-light btn-sm" onClick={() => addUp(index)}>
            <i className="bi bi-caret-up"></i>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <i className="bi bi-chevron-compact-up" style={{ fontSize: "x-large" }} onClick={() => setOpen(false)}></i>
      </div>
      <div className="form-group d-flex" style={{gap:"4px"}}>
        <input className="form-control w-75" placeholder="Content..." onChange={(e) => changeText(index,e.target.value)} rows="1" value={text}/>
        <input type="time" className="form-control w-25" onChange={(e)=> changeTime(index,e.target.value)} value={date}/>
      </div>
      <div className="">
        <button className="btn text-light btn-sm bi bi-arrow-bar-down" onClick={() => moveDown(index)}></button>
        <button className="btn text-light btn-sm mr-3" onClick={() => addDown(index)}>
          <i className="bi bi-caret-down"></i>
          <i className="bi bi-plus-circle"></i>
        </button>
        <button className={`btn text-light btn-sm bi ${send?"bi-box-arrow-up":"bi-box-arrow-in-down"}`} onClick={() => changeSend(index)}></button>
        <button className="btn text-light btn-sm bi bi-trash" onClick={() => deleteOne(index)}></button>
      </div>
    </div>
    )
  }else{
    return (
      <div className={`card ${send?"send":"recive"} p-2 d-flex justify-content-between align-items-center flex-row mb-2`} onClick={() => setOpen(true)} >
        <span style={{maxWidth: "85%"}}>{text}</span>
        <i className="bi bi-chevron-compact-down" style={{ fontSize: "x-large" }} onClick={() => setOpen(true)}></i>
      </div>
    )
  }
}