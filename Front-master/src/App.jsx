import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './pages/content/welcome'
import Service from './pages/content/service'
import AboutUs from './pages/content/aboutUs'
import Register from './pages/content/registers'
import Caregivers from './pages/content/caregivers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PerfileCare from './pages/content/perfileCaregiver'
import Login from './pages/content/Login'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>x
        <Route path="/" element={<Welcome />} />
        <Route path="/servicio" element={<Service />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/cuidadores" element={<Caregivers />} />
        <Route path="/PerfileCare" element={<PerfileCare />} />
        <Route path="/convertirse-en-cuidador" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
