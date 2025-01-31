import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomCard from "../../../components/Card";

const Caregivers = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundImage: `url(https://th.bing.com/th/id/R.dcb68fe645c6bd3a4bf00e0955d3a38a?rik=kPe%2fZFe%2fuoIsnA&pid=ImgRaw&r=0)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: "#fff",
                    paddingTop: "20px",
                }}
            >
                {/* Buscador */}
                <Box sx={{ marginBottom: "20px", width: "80%", maxWidth: "500px" }}>
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

                {/* Tarjetas Personalizadas */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        width: "100%",
                        padding: "20px",
                        gap: "20px",
                    }}
                >
                    {/* Sin tarjetas visibles */}
                </Box>
            </Box>
        </>
    );
};

export default Caregivers;
