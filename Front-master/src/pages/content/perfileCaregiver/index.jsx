import React from "react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";

const PerfilCare = ({ user = {} }) => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 4, 
                backgroundImage: 'url(https://source.unsplash.com/random/1600x900?landscape)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: '100vh' 
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ display: 'flex', height: '100%' }}>
                            <Box
                                component="img"
                                src={user.image || "https://via.placeholder.com/150"}
                                alt="User Profile"
                                sx={{ width: "100%", objectFit: "cover", borderRadius: 2 }}
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                {user.name || "Nombre del Usuario"}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                                {user.description || "Breve descripción sobre el usuario o sus intereses."}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                <strong>Correo:</strong> {user.email || "usuario@correo.com"}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                <strong>Teléfono:</strong> {user.phone || "123-456-7890"}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                <strong>Ubicación:</strong> {user.location || "Ciudad, País"}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PerfilCare;
