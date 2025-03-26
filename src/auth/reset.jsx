import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    Button,
    Paper,
    TextField,
    Link
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bgImage from '../assetts/bgimage1.png';
import logo from '../assetts/Logo.png'
const ResetPin = () => {
    const [code, setCode] = useState(['7', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 56 });
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    // Handle input change
    const handleCodeChange = (index, value) => {
        if (value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Move to next input if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    // Handle countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return { minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
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
                                // maxWidth: 550,
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
                            <Typography variant="h5" sx={{ fontWeight: 500, color: '#4B5563', mb: 1, textAlign: 'flex-start' }}>
                                Verification Email
                            </Typography>

                            <Typography sx={{ color: '#6B7280', mb: 4, textAlign: 'flex-start' }}>
                                We sent a code to <Box component="span" sx={{ color: '#0c4a6e', fontWeight: 500 }}>jamal@company.com</Box>
                            </Typography>

                            {/* Code Entry */}
                            <Box sx={{ mb: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography sx={{ color: '#4B5563', fontSize: '0.9rem' }}>
                                        Enter Code
                                    </Typography>
                                    <Typography sx={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                        Code expires in: <Box component="span" sx={{ color: '#EF4444' }}>00:56</Box>
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', mb: 3 }}>
                                    {code.map((digit, index) => (
                                        <TextField
                                            key={index}
                                            inputRef={el => inputRefs.current[index] = el}
                                            value={digit}
                                            onChange={(e) => handleCodeChange(index, e.target.value)}
                                            variant="outlined"
                                            inputProps={{
                                                maxLength: 1,
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '10px',
                                                    fontSize: '1.2rem',
                                                    width: '20px',
                                                    height: '20px'
                                                }
                                            }}
                                            sx={{
                                                width: '50px',
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 1,
                                                    borderColor: '#D1D5DB'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Typography sx={{ color: '#6B7280', fontSize: '0.9rem', mb: 4, textAlign: 'flex-start' }}>
                                    Didn't get a code? <Link href="#" sx={{ color: '#0c4a6e', textDecoration: 'none' }}>Click to resend</Link>
                                </Typography>
                            </Box>

                            {/* Action Buttons */}
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
                                    onClick={()=> navigate('/forget-pin')}
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
                                    onClick={()=> navigate('/set/new/pin')}
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

export default ResetPin
