import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    IconButton,
    TextField,
    InputAdornment,
    Button,
    Grid,
    ToggleButtonGroup,
    ToggleButton,
    Radio,
    RadioGroup,
    FormControlLabel,
    Divider,
    InputBase
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import TakeAwayDialog from './takeaway';

const DineDialog = () => {
    const [orderType, setOrderType] = useState('dineIn');
    // const [orderType, setOrderType] = useState<'dineIn' | 'takeaway' | 'reservation'>('dineIn');
    const [seatingArea, setSeatingArea] = useState('indoor');
    const [filterOption, setFilterOption] = useState('all');
    const [selectedTable, setSelectedTable] = useState('T8');

    const handleOrderTypeChange = (event, newOrderType) => {
        if (newOrderType !== null) {
            setOrderType(newOrderType);
        }
    };

    const handleSeatingAreaChange = (event, newSeatingArea) => {
        if (newSeatingArea !== null) {
            setSeatingArea(newSeatingArea);
        }
    };

    const handleFilterOptionChange = (event, newFilterOption) => {
        if (newFilterOption !== null) {
            setFilterOption(newFilterOption);
        }
    };

    const tables = [
        { id: 'T8', capacity: 4, available: true },
        { id: 'T9', capacity: 2, available: true },
        { id: 'T10', capacity: 2, available: true },
        { id: 'T11', capacity: 2, available: true },
        { id: 'T12', capacity: 2, available: true },
        { id: 'T2', capacity: 4, available: false },
        { id: 'T5', capacity: 2, available: false },
        { id: 'T6', capacity: 4, available: false },
        { id: 'T7', capacity: 2, available: false }
    ];

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

            {/* Customer Information */}
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
                <Grid item xs={4}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Customer Qty
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <TextField
                            size="small"
                            type="number"
                            defaultValue="10"
                            sx={{ width: '60%' }}
                        />
                        <Button
                            variant="outlined"
                            sx={{
                                ml: 1,
                                textTransform: 'none',
                                color: '#666',
                                borderColor: '#ddd'
                            }}
                        >
                            Person
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Seating Area */}
            <Box sx={{ px: 2, mb: 2 }}>
                <ToggleButtonGroup
                    value={seatingArea}
                    exclusive
                    onChange={handleSeatingAreaChange}
                    aria-label="seating area"
                    sx={{ width: '100%' }}
                >
                    <ToggleButton
                        value="indoor"
                        aria-label="indoor"
                        sx={{
                            flex: 1,
                            py: 1.5,
                            textTransform: 'none',
                            backgroundColor: seatingArea === 'indoor' ? '#2c3e50' : 'transparent',
                            color: seatingArea === 'indoor' ? 'white' : 'inherit',
                            '&.Mui-selected': {
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#1e2b38'
                                }
                            }
                        }}
                    >
                        Indoor
                    </ToggleButton>
                    <ToggleButton
                        value="outdoor"
                        aria-label="outdoor"
                        sx={{
                            flex: 1,
                            py: 1.5,
                            textTransform: 'none',
                            '&.Mui-selected': {
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#1e2b38'
                                }
                            }
                        }}
                    >
                        Outdoor
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Search and Filter */}
            <Box sx={{ px: 2, mb: 2, display: 'flex' }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        border: '1px solid #ddd',
                        boxShadow: 'none'
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search tables' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <ToggleButtonGroup
                    value={filterOption}
                    exclusive
                    onChange={handleFilterOptionChange}
                    aria-label="filter option"
                    size="small"
                    sx={{ ml: 1 }}
                >
                    <ToggleButton
                        value="all"
                        aria-label="all"
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                backgroundColor: '#1976d2',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#1565c0'
                                }
                            }
                        }}
                    >
                        All
                    </ToggleButton>
                    <ToggleButton
                        value="available"
                        aria-label="available"
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                backgroundColor: '#1976d2',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#1565c0'
                                }
                            }
                        }}
                    >
                        Available
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Table Selection */}
            <Box sx={{ px: 2, mb: 2 }}>
                <RadioGroup
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                >
                    <Grid container spacing={1}>
                        {tables.map((table) => (
                            <Grid item xs={6} key={table.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 1.5,
                                        bgcolor: table.id === selectedTable ? '#fff8e1' : (table.available ? 'white' : '#f5f5f5'),
                                        border: table.id === selectedTable ? '1px solid #ffc107' : '1px solid #e0e0e0',
                                        borderRadius: 1,
                                        opacity: table.available ? 1 : 0.7
                                    }}
                                >
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                                            {table.id}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                                                {table.capacity} person
                                            </Typography>
                                            {table.available ? (
                                                <FormControlLabel
                                                    value={table.id}
                                                    control={<Radio size="small" />}
                                                    label=""
                                                    sx={{ m: 0 }}
                                                />
                                            ) : (
                                                <Typography variant="caption" sx={{ color: '#757575' }}>
                                                    {table.id.split('-')[0]} - Full
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </RadioGroup>
            </Box>

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

export default DineDialog
