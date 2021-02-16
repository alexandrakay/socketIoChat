import React, { useState, useEffect } from "react";
import Message from './Message'
import MessageBox from './MessageBox'

import socketIoClient from "socket.io-client";


const socket = socketIoClient("http://localhost:8000", { autoConnect: false });
//autoconnect set to falso to delay connection

//this component returns list of messages
const Chat = () => {

    const [messages, setMessages] = useState([]);

    //method to add one or more messages to state
    const addMessage = (message) => {
        setMessages(oldMessages => [...oldMessages, ...(Array.isArray(message) ? message.reverse() : [message])]);
    };

    //run once and initialize socket connection
    useEffect(()=> {

        socket.on("latest", (data) => {
            //if succesful connection, server sends the latest messages
            addMessage(data);
        });
        //server notify's us whenever a new message has been sent
        socket.on("message", (message) => {
            addMessage(message);
        });

        //connect to socket
        socket.connect();

    }, []);

    return (
        <div>
            <div id = "messageBox">
                { messages.map((message, index) => <Message message={message} />) }
            </div>
            <MessageBox />
        </div>
    );

};

export default Chat;