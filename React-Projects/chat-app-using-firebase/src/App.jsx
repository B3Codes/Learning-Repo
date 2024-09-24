import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Chat from './Pages/Chat/Chat'
import ProfileUpdate from './Pages/ProfileUpdate/ProfileUpdate'

const App = () => {
  return (
    
      <>
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/chat' element ={<Chat />}/>
          <Route path='/profile' element = {<ProfileUpdate />} />
        </Routes>
    </>
  )
}

export default App
