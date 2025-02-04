import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !lastname || !email || !phone || !address || !role || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const userData = {
            name,
            lastname,
            email,
            phone,
            address,
            password
        };

        Axios.post("http://35.174.115.223:8080/api/users", userData)

        console.log("Datos de registro:", userData);
        // Aquí puedes enviar los datos a una API
    };

    const navigate = useNavigate(); // Para redirigir a otras páginas

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <Typography variant="h2" sx={{ marginBottom: "20px", color: "#000" }}>
                Registro
            </Typography>

            <Box
                sx={{
                    width: "90%",
                    maxWidth: "600px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Apellido"
                            variant="outlined"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Correo electrónico"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Teléfono"
                            variant="outlined"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Dirección"
                            variant="outlined"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Rol (ID)"
                            variant="outlined"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Confirmar contraseña"
                            type="password"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                        />
                    </Box>

                    <Button fullWidth color="primary" type="submit" sx={{ marginTop: "20px" }}>
                        Registrarse
                    </Button>

                    {/* Aquí está el texto "Ya tienes cuenta?" sin comportamiento */}
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: "20px",
                            textAlign: "center",
                            color: "#000",  // Mantén el color sin interacción
                        }}
                    >
                        Ya tienes cuenta?{" "}
                        {/* El "Inicia sesión" es el único que es clickeable */}
                        <span
                            onClick={() => navigate("/login")}
                            style={{
                                color: "blue",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                        >
                            Inicia sesión
                        </span>
                    </Typography>
                </form>
            </Box>
        </Box>
    );
};

export default Register;
