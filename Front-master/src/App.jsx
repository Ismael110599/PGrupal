import './App.css';
import Welcome from './pages/content/welcome';
import Service from './pages/content/service';
import AboutUs from './pages/content/aboutUs';
import Register from './pages/content/registers';
import Caregivers from './pages/content/caregivers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PerfileCare from './pages/content/perfileCaregiver';
import Login from './pages/content/Login';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const excludeNavbarFooterRoutes = ['/PerfileCare']; // Rutas donde no se debe mostrar el Navbar ni el Footer

  // Verificar si la ruta actual está en la lista de rutas que deben excluir el Navbar y el Footer
  const showNavbarFooter = !excludeNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/servicio" element={<Service />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/cuidadores" element={<Caregivers />} />
        <Route path="/PerfileCare" element={<PerfileCare />} />
        <Route path="/convertirse-en-cuidador" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
}

export default App;
