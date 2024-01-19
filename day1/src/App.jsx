import React from 'react'
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import './App.css'
import Content from './components/Content'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="layout">
    <LeftSidebar />
    <Content />
    <RightSidebar />
    </div>
    </>
  )
}

export default App