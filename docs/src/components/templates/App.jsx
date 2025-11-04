import React from 'react'
import MainHeader from '../organisms/MainHeader'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <MainHeader />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
