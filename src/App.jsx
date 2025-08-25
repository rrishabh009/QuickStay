import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation,} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';

// import Login from './pages/Login';

const App = () => {
  const  isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div> 
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App