import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ChatPage from './Pages/ChatPage'

function App() { 

  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact Component={<HomePage />}/>
        <Route path='/chats' exact Component={<ChatPage />}/>
      </Routes>
    </div>
  )
}

export default App
