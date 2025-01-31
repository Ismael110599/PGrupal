import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para manejar el formulario
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
        } else {
            console.log("Nombre:", name);
            console.log("Correo:", email);
            console.log("Contraseña:", password);
            // Aquí puedes enviar los datos a una API o hacer alguna otra acción
        }
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%", // Asegura que ocupe todo el ancho
                    height: "100vh", // Ocupa todo el alto del viewport
                    backgroundColor: `#ffffff`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: "#fff",
                    marginTop: "70px", // Ajusta la altura según el navbar
                    paddingTop: "20px",
                }}
            >
                {/* Título del formulario */}
                <Typography variant="h2" sx={{ marginBottom: "20px", color: "#000" }}>
                    Registro
                </Typography>

                {/* Formulario de registro */}
                <Box
                    sx={{
                        width: "80%",
                        maxWidth: "400px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        padding: "20px",
                        borderRadius: "8px",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ marginBottom: "20px" }}
                        />
                        <TextField
                            fullWidth
                            label="Confirmar contraseña"
                            type="password"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={{ marginBottom: "20px" }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Registrarse
                        </Button>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default Register;
