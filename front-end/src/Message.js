import React from 'react'

//returns date and content of message
const Message = ({ message }) => {

    return (
        <div className="message">
            <span> { new Date(message.date).toLocaleDateString() } </span>
            <span> { message.content } </span>
        </div>
    );

};
export default Message