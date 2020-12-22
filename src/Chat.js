import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import "./Chat.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import axios from "./axios";
function Chat({messages}) {
  const[input,setInput]=useState();

	const sendMessage=(e)=>{
		e.preventDefault();

		axios.post("/messages/new",{
			
				message:input,
				name:"devendra",
				timestamp:"realtime",
				received:true
			
		});
		setInput('');

	}
	return (
		<div className="chat">
		
		<div className="chat_header">
		<Avatar/>
		
		<div className="chat_headerInfo">
		   <h3>Room name</h3>
		   <p> Last seen at....</p>
		</div>
		<div className="chat_headerRight">
		 <IconButton>
		  <SearchOutlinedIcon/>
		  </IconButton>
		  <IconButton>
		  <AttachFileOutlinedIcon/>
		  </IconButton>
		  <IconButton>
		  <MoreVertOutlinedIcon/>
		  </IconButton>
		</div>
		</div>
		 <div className="chat__body">
		 {messages.map((message)=>(
		 <p className={`chat_message ${message.received} && "chat_reciever" `} > 
		 <span className="chat_name">{message.name}</span>
		 {message.message}
		 <span className="chat_timestamp">{message.timestamp}</span></p>
		 ))}
		 <p className="chat_message chat_reciever"> 
		 <span className="chat_name">Sonny</span>
		 this is meassge
		 <span className="chat_timestamp">{new Date().toUTCString()}</span></p>
		 <p className="chat_message"> 
		 <span className="chat_name">Sonny</span>
		 this is meassge
		 <span className="chat_timestamp">{new Date().toUTCString()}</span></p>
		 </div>	
		 <div className="chat_footer">
		 <InsertEmoticonOutlinedIcon/>
		 <form>
		 <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" type="text"/>
		 <button onClick={sendMessage}type="submit">Send a message</button>
		 </form>
		 <MicNoneOutlinedIcon/></div>
		</div>
	);
}

export default Chat
