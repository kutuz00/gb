import './styles/Message.sass';

export const Message = ({ message }) => {
    // const chats = useSelector((state) => state.chats.chatList);
    // const messages = useSelector(state => state.messages.messageList);

    // const dispatch = useDispatch();

    // const onAddMessage = (message) => {
    //     dispatch(addMessage(chatId, message));
    // }

    console.log(message);
    return (

        <div className="messageList">
            <p className="message message-author">{message.author}</p>
            <p className="message">{message.messageText}</p>
        </div>
    );
}

