import React , { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';

// Define the server endpoint 
const ENDPOINT = 'http://localhost:5000';

function App() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // create socket connection
    const newSocket = socketIOClient(ENDPOINT);
    setSocket(newSocket);

    // Listen for message from server
  newSocket.on('chat message', (msg) => {
    setChat(prevChat => [...prevChat, msg]);
  });

  // clean up on component unmount
  return () => newSocket.disconnect();

  }, []);

  const sendMessage = () => {
    if(message.trim() !== "") {
      // Emit the message to the server
      socket.emit("chat message", message);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Basic Chat App</h1>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          height: '300px',
          overflowY: 'scroll',
          marginBottom: '10px'
        }}
      >
        {chat.map((msg, index) => (
          <div key={{index}} style={{ margin: '5px 0' }}>
            {msg}
          </div>
        ))}
      </div>
      <input
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder='Type your message'
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={sendMessage} style={{ padding: '10px', marginLeft: '5px' }}>
        Send
      </button>
    </div>
  );
}

export default App;
