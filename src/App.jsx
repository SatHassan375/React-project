import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import './App.css'

function App() {

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='container-fluid px-0'>
        <Header />
        <Footer/>
      </div>
    </div>
  )
}

export default App
