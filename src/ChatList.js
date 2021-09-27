import React, { useState } from "react";
import { Button, List, ListItem } from "@material-ui/core";
import { ChatItem } from './ChatItem';
import './App.css';



export const ChatList = ({ chats, onAddChat, onDeleteChat }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);
        setValue('');


    }
    return (
        <div><>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input' type='text' value={value} onChange={handleChange} />
                <Button variant='contained' type='submit'>Add chat</Button>
            </form>

        </><>
                {chats.map((chat) =>
                (<ListItem className='button' key={chat.id}>
                    <ChatItem chat={chat} onDeleteChat={onDeleteChat}></ChatItem>
                </ListItem>))}


            </></div>

    )
}