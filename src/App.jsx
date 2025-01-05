import { useState } from 'react'
import './App.css'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import SignUpPage from './pages/signInPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-200 h-[100vh]'>
  
      <BrowserRouter>
      
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/admin/*" element={<AdminHomePage/>}/>
        <Route path="/*" element={<HomePage/>}/>
      </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App
