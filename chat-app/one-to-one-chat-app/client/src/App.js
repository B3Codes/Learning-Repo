import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';

const ENDPOINT = 'http://localhost:5000';

function App() {
  // States for registration and socket
  const [socket, setSocket] = useState(null);
  const [userName, setUserName] = useState('');
  const [registered, setRegistered] = useState(false);

  // states for one-to-one chat
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  // const [privateMessages, setPrivateMessages] = useState([]);
  const [privateChats, setPrivateChats] = useState({});
  const [message, setMessage] =useState('');

  // once user registered, connect to socket
  useEffect(() => {
    if(registered) {
      const newSocket = socketIOClient(ENDPOINT);
      setSocket(newSocket);

      // send registration info to the server
      newSocket.emit("register", userName);

      // List for list of online users
      newSocket.on("users", (users)=> {
        // Exclude self from the list
        const filteredList = users.filter((user) => user !== userName);
        setOnlineUsers(filteredList);
      })

      // Listen for the incoming private message
      newSocket.on('private message', (data) => {
        // Data contains {from, message}
        // setPrivateMessages((prevMessages) => [...prevMessages, data]);
        const { from, message } = data;
        // update the conversation for the sender
        setPrivateChats((prevChats) => {
          const chat = prevChats[from] ? [...prevChats[from]] : [];
          chat.push({ from, message });
          return {
            ...prevChats,
            [from]: chat
          };
        });
      });

      return () => newSocket.disconnect();
    }
  }, [registered, userName]);

  // Handle registration button click
  const handleRegister = () => {
    if(userName.trim() !== ''){
      setRegistered(true);
    }
  };

  // Handle sending a private message
  const sendPrivateMessage = () => {
    if(message.trim() !== '' && selectedUser !== '') {
      // Emit the private message event with the target username and message
      socket.emit('private message', {to: selectedUser, message});
      // optionally, add your own message to the conservation view
      // setPrivateMessages((prevMessages) => [
      //   ...prevMessages,
      //   { from:userName, message}
      // ]);
      setPrivateChats((prevChats) => {
        const chat = prevChats[selectedUser] ? [...prevChats[selectedUser]] : [];
        chat.push({from: userName, message});
        return {
          ...prevChats,
          [selectedUser]: chat,
        }
      })
      setMessage('');
    }
  };

    // Registration view if not yet registered

    if(!registered) {
      return(
        <div style={{ padding: '20px' }}>
          <h1>Enter your username</h1>
          <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='UserName'

          />
          <button onClick={handleRegister} style={{ padding: '10px' }}>
          Register
        </button>
        </div>
      );
    }

    // Main one-to-one chat UI

     // Retrieve the conversation for the selected user (or an empty array if none exists) 
     const currentChat = selectedUser ? (privateChats[selectedUser] || []) : [];

  return (
    <div style={{ padding: '20px' }}>
       <h1>Welcome, {userName}</h1>
      <div style={{ display: 'flex' }}>
        {/* Online Users List */}
        <div
          style={{
            width: '200px',
            borderRight: '1px solid #ccc',
            paddingRight: '10px'
          }}
        >
          <h2>Online Users</h2>
          {onlineUsers.length === 0 ? (
            <p>No user online</p>
          ):(
            <uL style={{ listStyle: 'none', padding: 0 }}>
              {onlineUsers.map((user, index) => (
                <li
                  key={index}
                  style={{
                    padding: '5px',
                    cursor: 'pointer',
                    background: selectedUser === user ? '#ddd' : 'transparent'
                  }}
                  onClick={() => {
                    setSelectedUser(user);
                    // setPrivateMessages([]); // clear previous conversation (optional)
                  }}
                >
                  {user}
                </li>
              ))}
            </uL>
          )}
        </div>

       

        {/* Chat window */}
        <div style={{ flex: 1, paddingLeft: '10px' }}>
          <h2>
            chat with {selectedUser ? selectedUser : '...'}
          </h2>
          <div
            style={{
              border: '1px solid #ccc',
              height: '300px',
              padding: '10px',
              overflowY: 'scroll'
            }}
          >
            
            {currentChat.map((msg, index) => (
              <div key={index} style={{ margin: '5px 0' }}>
                <strong>{msg.from}: </strong>
                {msg.message}
              </div>
            ))}
          </div>
          {selectedUser && (
            <div style={{ marginTop: '10px' }}>
              <input 
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type a message...'
                style={{ width: '80%', padding: '10px' }}
              />
              <button
                onClick={sendPrivateMessage}
                style={{ padding: '10px', marginLeft: '5px' }}
              >send</button>
            </div>
          )}
        </div>
        </div>
    </div>
  );
}

export default App;
