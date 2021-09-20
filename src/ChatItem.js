import React, { useState } from "react";
import { Button, List, ListItem } from "@material-ui/core";
import './App.css';
import { Link } from "react-router-dom";

export const ChatItem = ({ chats, addChat, deleteChat }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefaults();
        if (value) {
            addChat(value);
        }

    }
    return (


        <ListItem className='button' key={chat.id}>{chat.chatName}   <Link key={chat.id} to={`/chats/${chat.id}`}>
            <Button variant='contained'>Delete</Button>
        </ListItem>

    )
}