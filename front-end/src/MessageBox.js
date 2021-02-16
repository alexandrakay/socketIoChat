
import React, { useState } from "react";

import socketIoClient from "socket.io-client";


const socket = socketIoClient("http://localhost:8463", { autoConnect: false });


const MessageBox = () => {

    //value of current message being typed in
    const [value, setValue] = useState("");

    //communitcates message we want to send to the server
    const postMessage = e => {
        e.preventDefault();

        if (!value) return;

        socket.emit("message", value);
        //this emits the message on message path


        setValue("");
        //resets message box
    };

    return (
        <form onSubmit={ postMessage }>
            <input type="text" className="input" placeholder="message"
                   value={ value } onChange={ e => setValue(e.target.value) }
            />
        </form>
    );

};
export default MessageBox