import React from "react";
import { List, ListItem } from "@material-ui/core";
import './App.css';
import { Link } from "react-router-dom";

export const ChatList = ({ chats }) => {
    return (
        <div className="list">        <List>
            {chats.map((chat) =>
                <ListItem key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>{chat.chatName}</Link>
                </ListItem>

            )}
        </List ></div>
    );
}