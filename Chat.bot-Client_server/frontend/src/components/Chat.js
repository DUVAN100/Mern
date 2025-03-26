import { useEffect, useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import { fetchMessages, sendMessage } from '../services/chatService';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const data = await fetchMessages();
    setMessages(data || []);
  };

  const handleSend = async (user, message) => {
    if (message.trim()) {
      await sendMessage(user, message);
      loadMessages(); // Recargar mensajes
    }
  };

  return (
    <div className="chat-container">
      <h2>💬 Chat Bot</h2>
      <div className="message-list">
        {messages.map(msg => (
          <Message key={msg._id} user={msg.user} message={msg.message} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default Chat;
