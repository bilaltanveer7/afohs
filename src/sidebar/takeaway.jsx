import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    Button,
    Grid,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const TakeAwayDialog = () => {
    return (
        <Box>
            <Box sx={{ px: 2, mb: 2 }}>
                <TextField
                    fullWidth
                    variant="filled"
                    label="Order Id"
                    value="#001"
                    InputProps={{
                        readOnly: true,
                        disableUnderline: true,
                    }}
                    sx={{
                        bgcolor: '#f5f5f5',
                        '& .MuiFilledInput-root': {
                            bgcolor: 'transparent',
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                            '&.Mui-focused': {
                                bgcolor: 'transparent',
                            }
                        }
                    }}
                />
            </Box>

            <Grid container spacing={2} sx={{ px: 2, mb: 2 }}>
                <Grid item xs={8}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Customer Name
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Entry name or scan member card"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <QrCodeScannerIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>

            {/* Footer */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
                borderTop: '1px solid #e0e0e0'
            }}>
                <Button
                    sx={{
                        color: '#666',
                        textTransform: 'none',
                        mr: 1
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        bgcolor: '#0c3b5c',
                        '&:hover': {
                            bgcolor: '#072a42'
                        },
                        textTransform: 'none'
                    }}
                >
                    Choose Menu
                </Button>
            </Box>
        </Box>
    )
}

export default TakeAwayDialog
