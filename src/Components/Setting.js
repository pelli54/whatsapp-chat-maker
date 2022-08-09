import React, {useContext} from 'react'
import { GlobalContext } from "../store/Context";
import { BubbleSetting } from "./BubbleSetting";

export const Setting = () => {
	const {chatData, chatInfo, addDown, changeContact, changeStatus} = useContext(GlobalContext)

  return (
    <div style={{height:"88vh", overflowY:"overlay"}}>
      <div>
        <h6>Navbar Setting</h6>
        <div className="card bg-dark p-1">
          <div className="d-flex flex-wrap">
            <div className="form-group w-50 px-1 ">
              <label >Contact Name</label>
              <input type="text" name="title" id="title" className="form-control" value={chatInfo.number} onChange={(e) => changeContact(e.target.value)} />
            </div>
            <div className="form-group w-50 px-1">
              <label >Contact Status</label>
              <select className="form-control" name="status" id="status" onChange={(e) => changeStatus(e.target.value)} value={chatInfo.status}>
                <option>En linea</option>
                <option>Escribiendo...</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mt-3">Chat`s Bubble</h6>
      <div className="p-1">
        {
          chatData.map((a,i)=>(
            <BubbleSetting text={a.text} date={a.date} send={a.send} key={i} index={i}/>
          ))
        }
        {
          chatData.length===0&&<button className="btn btn-success w-100 bi bi-plus" onClick={()=> addDown()}></button>
        }
      </div>
    </div>

  )
}