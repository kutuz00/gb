import React, { useState } from "react";
import { Button, List, ListItem } from "@material-ui/core";
import './App.css';
import { Link } from "react-router-dom";

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

        <div>
            <div className="list App-link"> <List>
                {chats.map((chat) => {
                    ChatItem
                    <><form className='form'>
                        <input className='input' type='text' value={value} />
                        <Button variant='contained'>Add chat</Button>
                    </form>
                        <ListItem className='button' key={chat.id}>{chat.chatName}  <Link key={chat.id} to={`/chats/${chat.id}`}>
                        </ListItem>
                }

                </>
            </List >
        </div></div >
    )
}