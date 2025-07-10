import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const  isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div> 
      {!isOwnerPath && <Navbar/>}
      <div className="min-h-[70vh] w-full max-w-7xl mx-auto px-2 sm:px-4">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App