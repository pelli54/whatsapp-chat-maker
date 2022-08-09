import React,{useContext} from 'react'
import { GlobalContext } from "../store/Context";

import { Bubble } from './Bubble'

import avatar from "../avatar.jpg"


export const Chat = () => {
	const {chatData, chatInfo} = useContext(GlobalContext)

	return (
		<div style={{width: "400px",background:"#070e10"}}>
			<nav className="navChat">
				<div className="back">
					<i className="bi bi-arrow-left"></i>
				</div>
				<div className="navUser">
					<div className="avatar">
						<img alt="avatar" src={avatar} />
					</div>
					<div className="user">
						<span className="userName">{chatInfo.number}</span>
						<span className="status">{chatInfo.status}</span>
					</div>
				</div>
				
				<div className="buttons"> 
					<i className="bi bi-camera-video"></i>
					<i className="bi bi-telephone-fill"></i>
					<i className="bi bi-three-dots-vertical"></i>
				</div>
			</nav>
	
			<div className="cont" style={{width: 400 + "px", height: 510+"px"}} > 
				{
					chatData.map((a,i)=>(
						<Bubble
							key={i}
							i={i}
							text={a.text}
							send={a.send}
							date={a.date}
						/>
					))
				}
			</div>
			<div className="d-flex">
				<div className="whInput">
					<i className="bi bi-emoji-laughing"></i>
					<input type="text" name="" id="" placeholder="Mensaje"/>
					<i className="bi bi-paperclip"></i>
					<i className="bi bi-camera"></i>
				</div>
				<div className="btnMic">
					<i className="bi bi-mic"></i>
				</div>
			</div>
		</div>
	)
}