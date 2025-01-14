import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import UserData from './components/userData'
import { Toaster } from 'react-hot-toast'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
  
      <BrowserRouter>
      <Toaster position='top-right'/>
      
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<UserData/>}/>
        {/* methna prashne thibbe path ekak ethanin ehata ynwa nam wild card (*) dann oni eka nathi nisa */}
        <Route path="/admin/*" element={<AdminHomePage/>}/>
      
      </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App
