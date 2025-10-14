import React from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PostPage from './pages/PostPage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/posts/:id' element={<PostPage/>} />
    </Routes>
    </div>

  )
}

export default App
