// src/Chatbot.js
import React, { useState } from 'react';

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { user: true, text: input }]);
    setInput('');
    // Aqui você adicionaria a lógica para lidar com a resposta do chatbot.
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h2>Chatbot de Suporte</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
