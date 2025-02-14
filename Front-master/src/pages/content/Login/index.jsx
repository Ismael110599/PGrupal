import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Para redireccionar a la página de registro

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // Hook para la navegación

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        // Aquí puedes agregar la lógica para autenticar al usuario
    };

    return (
        <Box 
            sx={{ 
                backgroundColor: "white", 
                minHeight: "100vh", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", // Asegura la alineación vertical
            }}
        >
            <Container maxWidth="sm">
                <Box 
                    component={Paper} 
                    elevation={3} 
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: 400,
                        margin: "auto", // Esto ayuda a asegurar que el contenido se centre
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Iniciar Sesión
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <TextField
                            label="Correo Electrónico"
                            type="email"
                            name="email"
                            fullWidth
                            margin="normal"
                            required
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Contraseña"
                            type="password"
                            name="password"
                            fullWidth
                            margin="normal"
                            required
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth 
                            sx={{ mt: 2 }}
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: "20px",
                            textAlign: "center",
                            color: "#000",
                        }}  
                    >
                        ¿No tienes cuenta?{"  "}
                        <span
                            onClick={() => navigate("/convertirse-en-cuidador")}
                            style={{
                                color: "blue",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                        >
                            Regístrate
                        </span>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
