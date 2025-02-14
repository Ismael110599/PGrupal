import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// const API_URL = "http://35.174.115.223:8080/auth/register"; // URL del backend
const API_URL = "http://localhost:8080/auth/register"

const Register = () => {
    const navigate = useNavigate(); 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pets, setPets] = useState([{ name: "", type: "", age: "" }]);

    const handleAddPet = () => {
        setPets([...pets, { name: "", type: "", age: "" }]);
    };

    const handlePetChange = (index, field, value) => {
        const updatedPets = [...pets];
        updatedPets[index][field] = value;
        setPets(updatedPets);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !address || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const userData = {
            name,
            phone,
            email,
            address,
            password,
            pets: pets.filter((pet) => pet.name && pet.type && pet.age),
        };

        try {
            const response = await Axios.post(API_URL, userData, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 201) {
                alert("Registro exitoso");
                navigate("/login");
            } else {
                alert("Error al registrar.");
            }
        } catch (error) {
            alert("Error en el registro: " + (error.response?.data?.message || "Intenta nuevamente"));
        }
    };

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
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <TextField label="Nombre" id='Nombre' name="Nombre" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                        <TextField label="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                        <TextField label="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
                        <TextField label="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth />
                        <TextField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
                        <TextField label="Confirmar contraseña" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth />
                    </Box>

                    <Typography variant="h5" sx={{ marginTop: "20px", color: "#000" }}>
                        Mascotas
                    </Typography>

                    {pets.map((pet, index) => (
                        <Box key={index} sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                            <TextField label="Nombre de la mascota" value={pet.name} onChange={(e) => handlePetChange(index, "name", e.target.value)} fullWidth />
                            <TextField label="Tipo (Ej: Perro, Gato)" value={pet.type} onChange={(e) => handlePetChange(index, "type", e.target.value)} fullWidth />
                            <TextField label="Edad" type="number" value={pet.age} onChange={(e) => handlePetChange(index, "age", e.target.value)} fullWidth />
                        </Box>
                    ))}

                    <Button fullWidth color="secondary" onClick={handleAddPet} sx={{ marginTop: "10px" }}>
                        Agregar Mascota
                    </Button>

                    <Button fullWidth color="primary" type="submit" sx={{ marginTop: "20px" }}>
                        Registrarse
                    </Button>

                    <Typography variant="body1" sx={{ marginTop: "20px", textAlign: "center", color: "#000" }}>
                        Ya tienes cuenta?
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
