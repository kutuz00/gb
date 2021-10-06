import React, { useState } from "react";
import { Button, ListItem } from "@material-ui/core";
import { ChatItem } from './ChatItem';
import './App.css';
import { useDispatch } from "react-redux";
import { addChatToDb } from "./store/chats/actions";



export const ChatList = ({ chats, onAddChat, onDeleteChat }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChatToDb(value));
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