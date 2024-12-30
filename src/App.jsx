import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage'
import Prizes from './Components/Prizes'
import Profile from './Components/Profile'
import PunchCard from './Components/PunchCard'
import Schedule from './Components/Schedule'
import SignUp from './Components/SignUp'
import Login from './Components/Login'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>{/* basename={process.env.PUBLIC_URL}  */}
            <Route path="/" element={<MainPage />}/>
            <Route path="/prizes" element={<Prizes />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/punchcard" element={<PunchCard />} />
            <Route path="/schedule" element={<Schedule />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
