import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button, Typography, Grid, Paper, Avatar, Rating, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        toast.error('❌ No se encontró el token de autenticación');
        return;
      }

      try {
        const response = await Axios.get('http://localhost:8080/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data.data);
      } catch (error) {
        console.error('Error al obtener el perfil:', error.response?.data?.message || error.message);
        toast.error('❌ No se pudo obtener el perfil');
      }
    };

    fetchProfile();
  }, []);

  const { name, email, phone, address, role, pets } = userData || {};

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Sesión cerrada correctamente');
    navigate('/login');
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(to right, #ece9e6, #ffffff)", display: "flex", alignItems: "center", justifyContent: "center", padding: 3 }}>
      <Paper elevation={6} sx={{ maxWidth: 900, width: "100%", padding: 4, borderRadius: 3, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={4} container justifyContent="center">
            <Avatar alt={name} src="/placeholder.svg" sx={{ width: 160, height: 160, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }} />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }} gutterBottom>
              {name || "No disponible"}
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ fontStyle: "italic" }} gutterBottom>
              {role || "No disponible"}
            </Typography>

            {/* User Info */}
            <Box mb={3}>
              <Typography><strong>Email:</strong> {email || "No disponible"}</Typography>
              <Typography><strong>Teléfono:</strong> {phone || "No disponible"}</Typography>
              <Typography><strong>Dirección:</strong> {address || "No disponible"}</Typography>
            </Box>

            {/* Pets Section */}
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Mascotas:
            </Typography>
            {pets && pets.length > 0 ? (
              pets.map((pet, index) => (
                <Paper key={index} sx={{ padding: 2, marginBottom: 2, background: "#f9f9f9", borderRadius: 2 }}>
                  <Typography><strong>Nombre:</strong> {pet.name || "No disponible"}</Typography>
                  <Typography><strong>Tipo:</strong> {pet.type || "No disponible"}</Typography>
                  <Typography><strong>Edad:</strong> {pet.age || "No disponible"} años</Typography>
                </Paper>
              ))
            ) : (
              <Typography color="textSecondary">No tienes mascotas registradas.</Typography>
            )}

            {/* Logout Button */}
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleLogout} 
              sx={{ marginTop: 3, padding: "10px 20px", fontWeight: "bold", borderRadius: 2 }}
            >
              Cerrar Sesión
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <ToastContainer />
    </Box>
  );
}


export default Profile;
