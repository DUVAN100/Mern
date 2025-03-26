import { useState } from 'react';

function MessageInput({ onSend }) {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && message) {
      onSend(user, message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input 
        type="text" 
        placeholder="Tu nombre" 
        value={user} 
        onChange={(e) => setUser(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Escribe un mensaje..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MessageInput;
  