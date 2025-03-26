import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
    Box, Typography, TextField, Button, Select, MenuItem, Paper, Link
} from "@mui/material";
import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import bgImage from "../assetts/bgimage1.png"; // Import your background image
import logo from "../assetts/Logo.png"; // Import your logo

const SetNewPin = () => {
    const navigate = useNavigate();
    const [pin, setPin] = useState(['•', '', '', '', '', '']);
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePinChange = (index, value) => {
        if (value.length <= 1) {
            const newPin = [...pin];
            newPin[index] = value || '';
            setPin(newPin);

            // Move to next input if value is entered
            if (value && index < 5) {
                setCurrentIndex(index + 1);
            }
        }
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        //   backgroundColor: "rgba(0, 0, 0, 0.3)",
                        //   backdropFilter: "blur(1px)",
                        //   zIndex: 1,
                    },
                }}
            >
                {/* Left side with text */}
                <Box
                    sx={{
                        flex: 1,
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        p: 4,
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            color: "white",
                            maxWidth: "70%",
                            mb: 6,
                            fontWeight: 500,
                            lineHeight: 1.5,
                        }}
                    >
                        AFOHS Club was established in Pakistan Air Force Falcon Complex. A total of 25.5 Kanal of land was demarcated by Air Headquarters in PAF Falcon Complex for the establishment of "Community Centre and Club".
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    backgroundColor: index === 0 ? "white" : "rgba(255, 255, 255, 0.5)",
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Right side with login form */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "400px" },
                        display: "flex",
                        flexDirection: "column",
                        p: 1,
                        //   m: { xs: 1, md: 1 },
                        mt: { xs: 1, md: 1 },
                        mb: { xs: 1, md: 1 },
                        mr: { xs: 1, md: 1 },
                        zIndex: 1,
                    }}
                >
                    <Paper
                        elevation={4}
                        sx={{
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: 450,
                                p: 4,
                                // bgcolor: 'white',
                                borderRadius: 1,
                                boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                                border: '1px solid #e0e0e0'
                            }}
                        >
                            {/* Logo */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="AFOHS Club Logo"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                    }}
                                />

                            </Box>

                            {/* Heading */}
                            <Typography variant="h5" sx={{ fontWeight: 500, color: '#333', mb: 0.5 }}>
                                Set Up New Pin
                            </Typography>

                            <Typography sx={{ color: '#666', mb: 3, mt: 1 }}>
                                Enter the new pin to secure your account
                            </Typography>

                            {/* PIN Entry */}
                            <Box sx={{ mb: 3 }}>
                                <Typography sx={{ color: '#121212', mb: 1, fontSize: '0.9rem' }}>
                                    Enter New Pin
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1.3 }}>
                                    {pin.map((digit, index) => (
                                        <TextField
                                            key={index}
                                            variant="outlined"
                                            type={index === 0 ? "text" : "password"}
                                            value={digit}
                                            inputProps={{
                                                maxLength: 1,
                                                style: {
                                                    textAlign: 'center',
                                                    // padding: '12px 0x',
                                                    padding: '1rem',
                                                    fontSize: '1rem'
                                                }
                                            }}
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                '.MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#ccc'
                                                }
                                            }}
                                            InputProps={{
                                                readOnly: index === 0
                                            }}
                                            autoFocus={index === currentIndex}
                                            onChange={(e) => handlePinChange(index, e.target.value)}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Typography sx={{ color: '#121212', mb: 1, fontSize: '0.9rem' }}>
                                    Confirm New Pin
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1.3 }}>
                                    {pin.map((digit, index) => (
                                        <TextField
                                            key={index}
                                            variant="outlined"
                                            type={index === 0 ? "text" : "password"}
                                            value={digit}
                                            inputProps={{
                                                maxLength: 1,
                                                style: {
                                                    textAlign: 'center',
                                                    // padding: '12px 0x',
                                                    padding: '1rem',
                                                    fontSize: '1rem'
                                                }
                                            }}
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                '.MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#ccc'
                                                }
                                            }}
                                            InputProps={{
                                                readOnly: index === 0
                                            }}
                                            autoFocus={index === currentIndex}
                                            onChange={(e) => handlePinChange(index, e.target.value)}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* Navigation Buttons */}
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                <Button
                                    startIcon={<ArrowBackIcon />}
                                    sx={{
                                        color: '#4B5563',
                                        width: '150px',
                                        height: '40px',
                                        textTransform: 'none',
                                        borderRadius: 0,
                                        border: '1px solid #D1D5DB',
                                        // px: 2,
                                        py: 1
                                    }}
                                    onClick={() => navigate('/forget-pin')}
                                >
                                    Change Email
                                </Button>

                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        bgcolor: '#0c4a6e',
                                        width: '150px',
                                        height: '40px',
                                        color: 'white',
                                        textTransform: 'none',
                                        borderRadius: 0,
                                        px: 4,
                                        py: 1,
                                        '&:hover': {
                                            bgcolor: '#083654'
                                        }
                                    }}
                                    onClick={()=> navigate('/success')}
                                >
                                    Verify
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}

export default SetNewPin