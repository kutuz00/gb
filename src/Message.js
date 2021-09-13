import './styles/Message.sass'

export const Message = ({ message }) => {
    return (

        <div className="messageList">
            <p className="message message-author">{message.author}</p>
            <p className="message">{message.messageText}</p>
        </div>
    );
}

