import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Caregivers = () => {
    const [caregiversList, setCaregiversList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchCaregivers = async () => {
            try {
                const response = await Axios.get('http://localhost:8080/caregivers', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCaregiversList(response.data.data); // Suponiendo que los cuidadores están en "data"
            } catch (error) {
                console.error("Error al obtener la lista de cuidadores:", error);
                toast.error('❌ No se pudo obtener la lista de cuidadores');
            }
        };

        fetchCaregivers();
    }, []);

    const filteredCaregivers = caregiversList.filter((caregiver) =>
        caregiver.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url('https://th.bing.com/th/id/R.dcb68fe645c6bd3a4bf00e0955d3a38a?rik=kPe%2fZFe%2fuoIsnA&pid=ImgRaw&r=0')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "40px 20px",
            }}
        >
            {/* Buscador centrado */}
            <Box sx={{ marginBottom: "30px", width: "100%", maxWidth: "500px", textAlign: "center" }}>
                <TextField
                    fullWidth
                    label="Buscar cuidador"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                        },
                    }}
                />
            </Box>

            {/* Tarjetas en cuadrícula */}
            <Grid container spacing={3} justifyContent="center">
                {filteredCaregivers.map((caregiver, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                    <Avatar sx={{ width: 60, height: 60, marginRight: "15px" }} />
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">
                                            {caregiver.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {caregiver.email}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="textSecondary">
                                    📍 {caregiver.location}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    📅 Miembro desde {caregiver.memberSince}
                                </Typography>

                                <Typography variant="subtitle1" fontWeight="bold" sx={{ marginTop: "10px" }}>
                                    Sobre mí
                                </Typography>
                                <Typography variant="body2">{caregiver.about}</Typography>

                                <Typography variant="subtitle1" fontWeight="bold" sx={{ marginTop: "10px" }}>
                                    Habilidades
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                                    {caregiver.skills.map((skill, idx) => (
                                        <Chip key={idx} label={skill} sx={{ backgroundColor: "#e0e0e0" }} />
                                    ))}
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <ToastContainer />
        </Box>
    );
};

export default Caregivers;
