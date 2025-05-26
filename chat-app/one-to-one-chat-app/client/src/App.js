// import React, { useState, useEffect } from 'react';
// import socketIOClient from 'socket.io-client';
// import './App.css';

// const ENDPOINT = 'http://localhost:5000';

// function App() {
//   // States for registration and socket
//   const [socket, setSocket] = useState(null);
//   const [userName, setUserName] = useState('');
//   const [registered, setRegistered] = useState(false);

//   // states for one-to-one chat
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   // const [privateMessages, setPrivateMessages] = useState([]);
//   const [privateChats, setPrivateChats] = useState({});
//   const [message, setMessage] =useState('');

//   // once user registered, connect to socket
//   useEffect(() => {
//     if(registered) {
//       const newSocket = socketIOClient(ENDPOINT);
//       setSocket(newSocket);

//       // send registration info to the server
//       newSocket.emit("register", userName);

//       // List for list of online users
//       newSocket.on("users", (users)=> {
//         // Exclude self from the list
//         const filteredList = users.filter((user) => user !== userName);
//         setOnlineUsers(filteredList);
//       })

//       // Listen for the incoming private message
//       newSocket.on('private message', (data) => {
//         // Data contains {from, message}
//         // setPrivateMessages((prevMessages) => [...prevMessages, data]);
//         const { from, message } = data;
//         // update the conversation for the sender
//         setPrivateChats((prevChats) => {
//           const chat = prevChats[from] ? [...prevChats[from]] : [];
//           chat.push({ from, message });
//           return {
//             ...prevChats,
//             [from]: chat
//           };
//         });
//       });

//       return () => newSocket.disconnect();
//     }
//   }, [registered, userName]);

//   // Handle registration button click
//   const handleRegister = () => {
//     if(userName.trim() !== ''){
//       setRegistered(true);
//     }
//   };

//   // Handle sending a private message
//   const sendPrivateMessage = () => {
//     if(message.trim() !== '' && selectedUser !== '') {
//       // Emit the private message event with the target username and message
//       socket.emit('private message', {to: selectedUser, message});
//       // optionally, add your own message to the conservation view
//       // setPrivateMessages((prevMessages) => [
//       //   ...prevMessages,
//       //   { from:userName, message}
//       // ]);
//       setPrivateChats((prevChats) => {
//         const chat = prevChats[selectedUser] ? [...prevChats[selectedUser]] : [];
//         chat.push({from: userName, message});
//         return {
//           ...prevChats,
//           [selectedUser]: chat,
//         }
//       })
//       setMessage('');
//     }
//   };

//     // Registration view if not yet registered

//     if(!registered) {
//       return(
//         <div style={{ padding: '20px' }}>
//           <h1>Enter your username</h1>
//           <input
//             type='text'
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             placeholder='UserName'

//           />
//           <button onClick={handleRegister} style={{ padding: '10px' }}>
//           Register
//         </button>
//         </div>
//       );
//     }

//     // Main one-to-one chat UI

//      // Retrieve the conversation for the selected user (or an empty array if none exists) 
//      const currentChat = selectedUser ? (privateChats[selectedUser] || []) : [];

//   return (
//     <div style={{ padding: '20px' }}>
//        <h1>Welcome, {userName}</h1>
//       <div style={{ display: 'flex' }}>
//         {/* Online Users List */}
//         <div
//           style={{
//             width: '200px',
//             borderRight: '1px solid #ccc',
//             paddingRight: '10px'
//           }}
//         >
//           <h2>Online Users</h2>
//           {onlineUsers.length === 0 ? (
//             <p>No user online</p>
//           ):(
//             <uL style={{ listStyle: 'none', padding: 0 }}>
//               {onlineUsers.map((user, index) => (
//                 <li
//                   key={index}
//                   style={{
//                     padding: '5px',
//                     cursor: 'pointer',
//                     background: selectedUser === user ? '#ddd' : 'transparent'
//                   }}
//                   onClick={() => {
//                     setSelectedUser(user);
//                     // setPrivateMessages([]); // clear previous conversation (optional)
//                   }}
//                 >
//                   {user}
//                 </li>
//               ))}
//             </uL>
//           )}
//         </div>

       

//         {/* Chat window */}
//         <div style={{ flex: 1, paddingLeft: '10px' }}>
//           <h2>
//             chat with {selectedUser ? selectedUser : '...'}
//           </h2>
//           <div
//             style={{
//               border: '1px solid #ccc',
//               height: '300px',
//               padding: '10px',
//               overflowY: 'scroll'
//             }}
//           >
            
//             {currentChat.map((msg, index) => (
//               <div key={index} style={{ margin: '5px 0' }}>
//                 <strong>{msg.from}: </strong>
//                 {msg.message}
//               </div>
//             ))}
//           </div>
//           {selectedUser && (
//             <div style={{ marginTop: '10px' }}>
//               <input 
//                 type='text'
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder='Type a message...'
//                 style={{ width: '80%', padding: '10px' }}
//               />
//               <button
//                 onClick={sendPrivateMessage}
//                 style={{ padding: '10px', marginLeft: '5px' }}
//               >send</button>
//             </div>
//           )}
//         </div>
//         </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useCallback  } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './App.css';

const ENDPOINT = 'http://localhost:5000';
  
function App() {
  // App and user states
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || '');
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });
  const [authenticated, setAuthenticated] = useState(!!authToken);

  // Form states for login/register
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // true for login, false for register (toggle b/w login and register)
  


  // states for one-to-one chat 
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  // const [privateMessages, setPrivateMessages] = useState([]);
  const [privateChats, setPrivateChats] = useState({});
  const [message, setMessage] =useState('');


  // Logout handler
  const handleLogout = useCallback(() => {
    setAuthToken('');
    localStorage.removeItem('token');
    setAuthenticated(false);
    setCurrentUser(null);
    setUserName('');
    setPassword('');
    if(socket)socket.disconnect();
    setSocket(null);
  }, [socket]);

  // useEffect(() => {
  //   const savedUser = localStorage.getItem('currentUser');
  //   if (savedUser) {
  //     setCurrentUser(JSON.parse(savedUser));
  //     setAuthenticated(true);
  //   }
  // }, []);
  

    // --- Decode Token ---
  // In your useEffect (or a dedicated initialization function)
  useEffect(() => {
    if (authToken) {
      try {
        const decoded = jwtDecode(authToken);
        console.log("decoded: ", decoded);
        setCurrentUser(decoded.user);
        setAuthenticated(true);
      } catch (error) {
        console.error('Error decoding token: ', error);
        handleLogout();
      }
    }
  }, [authToken, handleLogout]);
  
  // --- Fetch Current User ---
  // when a token exists, fetch the current user details (or decode the token)
  useEffect(() => {
    // if(authToken) {
    if(!authToken) return;
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${ENDPOINT}/api/auth/me`, {
          headers: {'x-auth-token': authToken},
        });
        setCurrentUser(res.data);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        // If userName is not set in our state , update it
        // if (!userName) setUserName(res.data.userName);
      } catch (error) {
        console.log('Error fetching user info: ',error);
        handleLogout();
      }
    };
      fetchUser();
      // setAuthenticated(true);
    // }  
  }, [authToken, handleLogout]);

  // --- Initialize Socket.IO Connection ---
  // Establish the socket.IO connection when authenticated
  useEffect(() => {
    if(authenticated && currentUser) {
      const newSocket = socketIOClient(ENDPOINT, {
        auth: {token: authToken},
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });
      
      // Listen for online users
      newSocket.on('users', (users) => {
        // Exclude self (username stored in token payload ideally )
        const current   = currentUser?.userName;
        const filteredList = users.filter((user) => user !== current);
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

      // Listen for conversation history
      newSocket.on('conversation history', ({ withUser, messages }) => {
        setPrivateChats((prevChats) => ({...prevChats, [withUser]: messages}));
      });

      setSocket(newSocket);
      return () => newSocket.disconnect();
    }
  }, [authenticated, authToken, currentUser]);
  
  // // Handle registration button click
  // const handleRegister = () => {
  //   if(userName.trim() !== ''){
  //     setRegistered(true);
  //   }
  // };

  // Authentication handler (for login/register)
  const handleAuth = async () => {
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const res = await axios.post(`${ENDPOINT}${endpoint}`, { userName, password });
      const token = res.data.token;
      setAuthToken(token);
      localStorage.setItem('token', token);
      const decode = jwtDecode(token);
      setCurrentUser(decode.user);
      localStorage.setItem('currentUser', JSON.stringify(decode.user)); // or the decoded user
      setAuthenticated(true);
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data.msg || 'Auth error');
    }
  };

  

  // Handle sending a private message
  const sendPrivateMessage = () => {
    if(message.trim() && selectedUser && socket) {
      // Emit the private message event with the target username and message
      socket.emit('private message', {to: selectedUser, message});
      // optionally, add your own message to the conservation view
      // setPrivateMessages((prevMessages) => [
      //   ...prevMessages,
      //   { from:userName, message}
      // ]);
      setPrivateChats((prevChats) => {
        const chat = prevChats[selectedUser] ? [...prevChats[selectedUser]] : [];
        const sender = currentUser ? currentUser.userName : userName;
        chat.push({from: sender, message});
        return {
          ...prevChats,
          [selectedUser]: chat,
        }
      })
      setMessage('');
    }
  };

    // Registration view if not yet registered

    if(!authenticated) {
      
      return(
        <div style={{ padding: '20px' }}>
          <h1>{isLogin ? 'Login' : 'Register' }</h1>
          <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='UserName'
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            style={{ padding: '10px', marginRight: '10px' }}
            />
          <button onClick={handleAuth} style={{ padding: '10px' }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
        <br />
        <button onClick={() => setIsLogin(!isLogin) } style={{ padding: '10px', marginTop: '10px' }}>
          Switch to {isLogin ? 'Register' : 'Login'}
        </button>
        </div>
      );
    }

    // Main one-to-one chat UI

     // Retrieve the conversation for the selected user (or an empty array if none exists) 
       // Determine the conversation for the selected user
         // --- Render Chat Interface ---
     const currentChat = selectedUser ? (privateChats[selectedUser] || []) : [];

  return (
    <div style={{ padding: '20px' }}>
       <h1>Welcome, {currentUser ? currentUser.userName : userName}</h1>
       <button onClick={handleLogout} style={{ marginBottom: '20px' }}>Logout</button>
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
            <ul style={{ listStyle: 'none', padding: 0 }}>
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
                    // request conversation history
                    if (socket) socket.emit('load messages', user);
                  }}
                >
                  {user}
                </li>
              ))}
            </ul>
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
            
            {currentChat.map((msg, index) =>{
            console.log("msg: ", msg);
            return (
              <div style={styles.chatContainer}>
      {/* Chat Messages */}
              <div  key={index}
              style={{
                ...styles.messageBubble,
                ...(msg.from === currentUser.userName ? styles.currentUserBubble : styles.otherUserBubble)
              }}>
                {/* <strong>{msg.from}: </strong> */}
                {msg.message}
              </div>
              </div>
            )})}
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

// Styles for WhatsApp-like design
const styles = {
  chatContainer: {
    // width: "400px",
    // height: "500px",
    display: "flex",
    flexDirection: "column",
    // border: "1px solid #ccc",
    // borderRadius: "10px",
    overflow: "hidden",
    // backgroundColor: "#f5f5f5"
  },
  chatBox: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column"
  },
  messageBubble: {
    maxWidth: "60%",
    padding: "10px",
    margin: "5px",
    borderRadius: "10px",
    fontSize: "14px",
    lineHeight: "1.4",
    display: "inline-block",
    wordBreak: "break-word"
  },
  currentUserBubble: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
    textAlign: "right"
  },
  otherUserBubble: {
    backgroundColor: "#EAEAEA",
    alignSelf: "flex-start",
    textAlign: "left"
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
    backgroundColor: "#fff"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  sendButton: {
    marginLeft: "10px",
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;
