import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
// iconbutton makes material ui icons clickable
function Sidebar() {
	return (
		<div className="sidebar">
	
		<div className="sidebar_header">
		<Avatar/>
		<div className="sidebar_headerRight">
		 <IconButton>    
		      <DonutLargeIcon/>
		</IconButton>
		<IconButton>
		       <ChatIcon/>
		</IconButton>
		<IconButton>
		  <MoreVertOutlinedIcon/>
		</IconButton>
		   </div>
		</div>
		 <div className="sidebar_search">
		 <div className="sidebar_searchConatiner">
		      <SearchOutlinedIcon/>
		 <input  placeholder="search for chat" type="text"/>
		 </div>
		 </div>
		
		 
		    <div className="sidebar_chats">
		     <SidebarChat/>
		      <SidebarChat/>
		       <SidebarChat/>
		 </div>
		 
		

		</div>
	);
}

export default Sidebar;
