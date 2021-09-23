import React, { useState } from "react";
import { Button, List, ListItem } from "@material-ui/core";
import './App.css';



export const ChatList = ({ chats, addChat, deleteChat }) => {
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


        <div className="list App-link">
            {chats.map((chat) => {
                <><form className='form'>
                    <input className='input' type='text' value={value} />
                    <Button variant='contained'>Add chat</Button>
                </form><List>
                        <ListItem className='button' key={chat.id}><ChatItem chat={chat}>{chat.chatName}</ChatItem></ListItem>


                    </List></>
</div>
    )
}