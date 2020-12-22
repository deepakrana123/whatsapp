import React,{useEffect, useState} from 'react';
import "./App.css";
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const[message , setMessage]= useState([]);

  useEffect(()=>{
       axios.get('/messages/get')
       .then(response=>{

        setMessage(response.data);
         console.log(response.data);
       });
  },[]);


  useEffect(() => {
    var pusher = new Pusher('32cd206ba88c516780ec', {
      cluster: 'ap2'
    });
  
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
      setMessage([...message,data]);
    });

    return ()=>{
      pusher.unbind_all();
      pusher.unsubscribe();
    };

  }, [message]);

  console.log(message);


  
  return (
    <div className="app">
    {/*sidebar*/}
    {/*chat*/}
    <div className="app-body">
    <Sidebar />
    <Chat messages={message}/> 
    </div>
    
    </div>
      
    
  )
}  

export default App

