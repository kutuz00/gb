import React from "react";
import { List, ListItem } from "@material-ui/core";
import './App.css';
import { Link } from "react-router-dom";

export const ChatList = ({ chats }) => {
    return (
        <div className="list"> <List>
            {chats.map((chat) =>

                <Link key={chat.id} to={`/chats/${chat.id}`}><ListItem key={chat.id}>{chat.chatName}  </ListItem></Link>


            )}
        </List ></div>
    )
}