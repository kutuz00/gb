import './styles/Message.sass'

export const Message = ({ message }) => {
    return (

        <div className="messageList">
            <p className="message message-author" key={message.id}>{message.author}</p>
            <p className="message" key={message.id}>{message.messageText}</p>
        </div>
    );
}

