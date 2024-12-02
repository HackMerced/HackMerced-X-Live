import { useState } from 'react'
import './App.css'

import MainPage from './Components/MainPage'
import Prizes from './Components/Prizes'
import Profile from './Components/Profile'
import PunchCard from './Components/PunchCard'
import Schedule from './Components/Schedule'
import SignUp from './Components/SignUp'
function App() {

  return (
    <>
      <MainPage />
      <Prizes />
      <Profile />
      <PunchCard />
      <Schedule />
      <SignUp />
    </>
  )
}

export default App
