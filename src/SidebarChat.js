import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function SidebarChat() {
	return (
		<div className="sidebarChat">
		<Avatar/>
		<div className="sidebarChat_info">
		  <h2>Room name</h2>
		  <p>this is the last massge</p></div>
			
		</div>
	)
}

export default SidebarChat;
