import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Navbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparente con ligera opacidad
                backdropFilter: "blur(10px)", // Efecto de desenfoque tipo "cristal"
                color: "#FFFF",
                top: 0,
                width: "100%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.0)",
                zIndex: 1201,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="https://img.freepik.com/vector-premium/plantilla-logotipo-perro-guarderia-animales-tienda-mascotas-ilustracion-vectorial_279597-1068.jpg"
                        alt="Logo"
                        sx={{
                            height: 40,
                            borderRadius: "50%",
                            bgcolor: "#fff",
                            padding: "5px",
                        }}
                    />

                    {/* Menú de navegación */}
                    <Box sx={{ display: "flex", gap: 3 }}>
                        {[
                            { label: "Inicio", href: "/" },
                            { label: "Nosotros", href: "/nosotros" },
                            { label: "Servicios", href: "/servicio" },
                            { label: "Cuidadores", href: "/cuidadores" },
                            { label: "Conviértete en un cuidador", href: "/convertirse-en-cuidador" },
                        ].map((item, index) => (
                            <Button
                                key={index}
                                href={item.href}
                                sx={{
                                    textTransform: "none",
                                    fontSize: "15px",
                                    color: "#000",
                                    transition: "0.3s",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
