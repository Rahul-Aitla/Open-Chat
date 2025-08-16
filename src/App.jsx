import React from 'react'

import { ChatInterface } from "./components/chat-interface.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  ChatRooms  from "./components/ChatRooms.jsx"



function App() {
  return (
    <Router>
  <main className="min-h-screen w-full bg-gray-900">
        <Routes>
          <Route path="/" element={<ChatRooms />} />
          <Route path="/:roomId" element={<ChatInterface isChatRoom={true} />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App

