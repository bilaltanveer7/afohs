import React, { useState } from 'react'
import SideNav from '../sidebar/sidenav'
import { useNavigate } from 'react-router-dom';
import arrow from '../assetts/arrowicon.png';
import ReservationOrder from './reserve';
import NewSelfOrder from './neworder';
import CloseIcon from "@mui/icons-material/Close";
import CancelOrder from './delmodal';
import "./style.css"
import {
    Box,
    Grid,
    Typography,
    Paper,
    Button,
    IconButton,
    Chip,
    Select,
    MenuItem
} from '@mui/material';
import {
    ArrowUpward,
    MoreVert,
    Add,
    AccessTime,
    Print,
    Chat
} from '@mui/icons-material';

const drawerWidthOpen = 240;
const drawerWidthClosed = 110;

const Dashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [showReserve, setShowReserve] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const handleCancelOrder = () => {
        setIsModalVisible(false); // Close the cancel order modal
        setIsNotificationVisible(true); // Show the notification

        // Auto-hide the notification after 3 seconds
        setTimeout(() => {
            setIsNotificationVisible(false);
        }, 3000);
    };

    return (
        <>
            <SideNav open={open} setOpen={setOpen} />
            <div style={{
                marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
                transition: "margin-left 0.3s ease-in-out",
                marginTop: '4rem',
            }}>
                <Box sx={{ flexGrow: 1, p: 2, bgcolor: '#f5f7fa' }}>
                    <Grid container spacing={2}>
                        {/* first column */}
                        <Grid item xs={12} md={5.3}>
                            <Paper sx={{ bgcolor: '#0e3151', color: 'white', height: '326px', borderRadius: '8px' }}>
                                <Box>
                                    <Box
                                        sx={{
                                            bgcolor: '#0e3151',
                                            // opacity:25%,
                                            p: 1.5,
                                            borderRadius: '4px',
                                            mb: 2,
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
                                            Sales up to <strong>56%</strong> compared to yesterday
                                        </Typography>
                                        <Box
                                            sx={{
                                                height: '1px',
                                                bgcolor: '#ccc',
                                                position: 'absolute',
                                                bottom: '0',
                                                left: '0',
                                                right: '0',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '75vh', ml: 2, display: 'flex', justifyContent: 'center' }}>

                                        <Grid container spacing={1} sx={{
                                            // bgcolor: 'black',
                                            width: '100%',

                                        }}>
                                            <Grid item xs={5}>
                                                <Typography variant="body2" sx={{ mb: 2 }}>Today Revenue</Typography>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                                    Rs 559,102.00
                                                </Typography>
                                            </Grid>
                                            <Box sx={{ width: '1px', height: '30%', bgcolor: '#fff', m: 4 }} />

                                            <Grid item xs={5} container alignItems="flex-start" justifyContent="flex-end">
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                                                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: 'green' }}>
                                                        <ArrowUpward sx={{ fontSize: 12, color: '#4caf50', mr: 0.5 }} />
                                                        +40%
                                                    </Typography>
                                                    <Typography variant="body2">Today Profit</Typography>
                                                </Box>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                    Rs 223,640.80
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                    </Box>

                                    <Grid container spacing={2} sx={{
                                        mt: 1
                                    }}>
                                        <Grid item xs={3} textAlign="center">
                                            <Typography variant="h6">40%</Typography>
                                            <Typography variant="caption">Dine In</Typography>
                                        </Grid>
                                        <Grid item xs={3} textAlign="center">
                                            <Typography variant="h6">15%</Typography>
                                            <Typography variant="caption">Takeaway</Typography>
                                        </Grid>
                                        <Grid item xs={3} textAlign="center">
                                            <Typography variant="h6">35%</Typography>
                                            <Typography variant="caption">Delivery</Typography>
                                        </Grid>
                                        <Grid item xs={3} textAlign="center">
                                            <Typography variant="h6">10%</Typography>
                                            <Typography variant="caption">Pick Up</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            <Paper sx={{ p: 2, mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Reservation Order</Typography>
                                    <img src={arrow} alt="" style={{
                                        height: '32px',
                                        width: '32px',
                                        // marginLeft:'10px',
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => setShowReserve(true)} />
                                    <div className={`slide-panel-reserve ${showReserve ? "open" : ""}`}>
                                        <button className="close-btn" onClick={() => setShowReserve(false)}>
                                            <CloseIcon fontSize="medium" />
                                        </button>
                                        <div className="slide-panel-reserve-content">
                                            <ReservationOrder />
                                        </div>
                                    </div>
                                </Box>

                                {/* Calendar Days */}
                                <Grid container spacing={0} sx={{ mb: 2 }}>
                                    {['Sun', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                                        <Grid
                                            item
                                            key={index}
                                            xs={12 / 7}
                                            sx={{
                                                textAlign: 'center',
                                                p: 1,
                                                borderRight: '1px solid #e0e0e0',
                                                borderTop: '1px solid #e0e0e0',
                                                borderBottom: '1px solid #e0e0e0',
                                                borderLeft: index === 0 ? '1px solid #e0e0e0' : 'none',
                                                bgcolor: index === 0 ? '#e6f0fa' : 'white',
                                            }}
                                        >
                                            <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 500 }}>
                                                {day}
                                            </Typography>

                                            <Box sx={{ mt: 1 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                    {7 + index}
                                                </Typography>
                                            </Box>

                                            {[0, 1, 2, 5].includes(index) && (
                                                <Box
                                                    sx={{
                                                        mt: 1,
                                                        mx: 'auto',
                                                        width: 24,
                                                        height: 24,
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    2
                                                </Box>
                                            )}
                                        </Grid>
                                    ))}
                                </Grid>

                                {/* Reservation List */}
                                <Box sx={{ mt: 3 }}>
                                    {/* Reservation 1 */}
                                    <Box sx={{
                                        bgcolor: '#F6F6F6',
                                        borderRadius: 1,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                        mb: 2
                                    }}>
                                        {/* Customer info section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        minWidth: 40,
                                                        height: 40,
                                                        p: 0,
                                                        fontWeight: 'bold',
                                                        fontSize: '0.875rem'
                                                    }}
                                                >
                                                    T12
                                                </Button>
                                            </Box>

                                            <Box sx={{
                                                mr: 2,

                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Box component="span" sx={{ fontSize: '1.2rem' }}>🖨️</Box>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                            Qafi Latif
                                                        </Typography>
                                                        <Box component="span" sx={{
                                                            color: '#f59e0b',
                                                            fontSize: '1.2rem',
                                                            bgcolor: '#FEF3C7',
                                                            borderRadius: '50%',
                                                            width: 24,
                                                            height: 24,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>😊</Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box component="span" sx={{ mr: 0.5, fontSize: '1rem' }}>🕙</Box>
                                                        <Typography variant="caption">10:00 AM</Typography>
                                                    </Box>
                                                </Box>

                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                    5 Person • 12 Items
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Order actions section */}
                                        <Box sx={{
                                            // borderTop: '1px solid #f0f0f0',
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',

                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Chip
                                                    label="#001"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <Chip
                                                    label="DP • 50%"
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        mr: 1,
                                                        borderColor: '#e0e0e0',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                                <Box sx={{ ml: 'auto', mr: 2 }}>
                                                    <IconButton size="small" sx={{ p: 0 }}>
                                                        <Box component="span" sx={{ color: '#ef4444', fontSize: '1rem' }}>🗑️</Box>
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<Box component="span" sx={{ fontSize: '0.875rem' }}>✓</Box>}
                                                sx={{
                                                    bgcolor: '#0e3151',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    borderRadius: 0,
                                                    px: 2,
                                                    py: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&:hover': {
                                                        bgcolor: '#0a2540'
                                                    }
                                                }}
                                            >
                                                Process Order
                                            </Button>
                                        </Box>
                                    </Box>

                                    {/* Reservation 2 */}

                                    <Box sx={{
                                        bgcolor: '#F6F6F6',
                                        borderRadius: 1,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                        mb: 2
                                    }}>
                                        {/* Customer info section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        minWidth: 40,
                                                        height: 40,
                                                        p: 0,
                                                        fontWeight: 'bold',
                                                        fontSize: '0.875rem'
                                                    }}
                                                >
                                                    T32
                                                </Button>
                                            </Box>

                                            <Box sx={{
                                                mr: 2,

                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Box component="span" sx={{ fontSize: '1.2rem' }}>💬</Box>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                            Annette Black
                                                        </Typography>
                                                        <Box component="span" sx={{
                                                            color: '#f59e0b',
                                                            fontSize: '1.2rem',
                                                            bgcolor: '#FEF3C7',
                                                            borderRadius: '50%',
                                                            width: 24,
                                                            height: 24,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>😊</Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box component="span" sx={{ mr: 0.5, fontSize: '1rem' }}>🕙</Box>
                                                        <Typography variant="caption">10:00 AM</Typography>
                                                    </Box>
                                                </Box>

                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                    2 Person • Menu not yet added
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Order actions section */}
                                        <Box sx={{
                                            // borderTop: '1px solid #f0f0f0',
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',

                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Chip
                                                    label="#001"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <Chip
                                                    label="DP • 50%"
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        mr: 1,
                                                        borderColor: '#e0e0e0',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                                <Box sx={{ ml: 'auto', mr: 2 }}>
                                                    <IconButton size="small" sx={{ p: 0 }}>
                                                        <Box component="span" sx={{ color: '#ef4444', fontSize: '1rem' }}>🗑️</Box>
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<Box component="span" sx={{ fontSize: '0.875rem' }}>✓</Box>}
                                                sx={{
                                                    bgcolor: '#0e3151',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    borderRadius: 0,
                                                    px: 2,
                                                    py: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&:hover': {
                                                        bgcolor: '#0a2540'
                                                    }
                                                }}
                                            >
                                                Process Order
                                            </Button>
                                        </Box>
                                    </Box>

                                    {/* Reservation 3 */}
                                    <Box sx={{
                                        bgcolor: '#F6F6F6',
                                        borderRadius: 1,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                        mb: 2
                                    }}>
                                        {/* Customer info section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        minWidth: 40,
                                                        height: 40,
                                                        p: 0,
                                                        fontWeight: 'bold',
                                                        fontSize: '0.875rem'
                                                    }}
                                                >
                                                    T14
                                                </Button>
                                            </Box>

                                            <Box sx={{
                                                mr: 2,

                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Box component="span" sx={{ fontSize: '1.2rem' }}>💬</Box>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                            Ronald Richards
                                                        </Typography>
                                                        <Box component="span" sx={{
                                                            color: '#f59e0b',
                                                            fontSize: '1.2rem',
                                                            bgcolor: '#FEF3C7',
                                                            borderRadius: '50%',
                                                            width: 24,
                                                            height: 24,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>😊</Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box component="span" sx={{ mr: 0.5, fontSize: '1rem' }}>🕙</Box>
                                                        <Typography variant="caption">15:00 PM</Typography>
                                                    </Box>
                                                </Box>

                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                    8 Person • 12 Items
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Order actions section */}
                                        <Box sx={{
                                            // borderTop: '1px solid #f0f0f0',
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',

                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Chip
                                                    label="#001"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <Chip
                                                    label="DP • 50%"
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        mr: 1,
                                                        borderColor: '#e0e0e0',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                                <Box sx={{ ml: 'auto', mr: 2 }}>
                                                    <IconButton size="small" sx={{ p: 0 }}>
                                                        <Box component="span" sx={{ color: '#ef4444', fontSize: '1rem' }}>🗑️</Box>
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<Box component="span" sx={{ fontSize: '0.875rem' }}>✓</Box>}
                                                sx={{
                                                    bgcolor: '#0e3151',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    borderRadius: 0,
                                                    px: 2,
                                                    py: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&:hover': {
                                                        bgcolor: '#0a2540'
                                                    }
                                                }}
                                            >
                                                Process Order
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        {/* second column */}
                        <Grid item xs={12} md={3.4}>
                            {/* Top Right - Order Stats */}
                            <Grid item xs={12}>
                                <Grid container spacing={0.9}>
                                    {/* Total Transactions Card */}
                                    <Grid item xs={12}>
                                        <Paper sx={{
                                            bgcolor: '#2d3a41',
                                            color: 'white',
                                            p: 0,
                                            // width: '320px',
                                            height: '166px',
                                            overflow: 'hidden',
                                            borderRadius: 1
                                        }}>
                                            {/* Top section - Total Transactions */}
                                            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{
                                                    bgcolor: '#1e282e',
                                                    p: 1.5,
                                                    borderRadius: '50%',
                                                    mr: 2,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Box component="span" sx={{ fontSize: '1.2rem' }}>📄</Box>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                                        Total Transactions
                                                    </Typography>
                                                    <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 0.5 }}>
                                                        320
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            {/* Bottom section - Self Order and Mobile App */}
                                            <Grid container sx={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                                <Grid item xs={6} sx={{
                                                    p: 1,
                                                    // borderRight: '1px solid rgba(255,255,255,0.1)'
                                                }}>
                                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                                        Self Order
                                                    </Typography>
                                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 0.5 }}>
                                                        280
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6} sx={{ p: 1 }}>
                                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                                        Mobile App
                                                    </Typography>
                                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 0.5 }}>
                                                        40
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>

                                    {/* Product Sold and Total Order Cards */}
                                    <Grid item xs={6}>
                                        <Paper sx={{ bgcolor: '#2d3a41', color: 'white', p: 2, height: '100%' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 1.5
                                            }}>
                                                <Box sx={{
                                                    bgcolor: '#1e282e',
                                                    p: 1.5,
                                                    borderRadius: '50%',
                                                    mr: 2,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Box component="span" sx={{ fontSize: '1.2rem' }}>📦</Box>
                                                </Box>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                                    Product Sold
                                                </Typography>
                                            </Box>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                500
                                            </Typography>
                                            <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                                Items
                                            </Typography>
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Paper sx={{ bgcolor: '#2d3a41', color: 'white', p: 2, height: '100%' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 1.5
                                            }}>
                                                <Box sx={{
                                                    bgcolor: '#1e282e',
                                                    p: 1.5,
                                                    borderRadius: '50%',
                                                    mr: 2,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Box component="span" sx={{ fontSize: '1.2rem' }}>📋</Box>
                                                </Box>
                                                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                                    Total Order
                                                </Typography>
                                            </Box>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                380
                                            </Typography>
                                            <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                                Order
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Paper sx={{ p: 0, mt: 2, boxShadow: 'none', bgcolor: '#FFFFFF' }}>
                                {/* Header */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pb: 3 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>New Self Order</Typography>
                                    <img src={arrow} alt="" style={{
                                        height: '32px',
                                        width: '32px',
                                        // marginLeft: '10px',
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => setShowOrder(true)} />
                                    <div className={`slide-panel-reserve ${showOrder ? "open" : ""}`}>
                                        <button className="close-btn" onClick={() => setShowOrder(false)}>
                                            <CloseIcon fontSize="medium" />
                                        </button>
                                        <div className="slide-panel-reserve-content">
                                            <NewSelfOrder />
                                        </div>
                                    </div>
                                </Box>

                                {/* Self Order List */}
                                <Box sx={{
                                    p: 2
                                }}>
                                    {/* Order 1 */}
                                    <Box sx={{
                                        bgcolor: '#F6F6F6',
                                        borderRadius: 1,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Customer info section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{
                                                mr: 2,
                                                bgcolor: '#f0f0f0',
                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Box component="span" sx={{ fontSize: '1.2rem' }}>🚚</Box>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                        Miles Esther
                                                    </Typography>
                                                    <Box component="span" sx={{
                                                        color: '#f59e0b',
                                                        fontSize: '1.2rem',
                                                        bgcolor: '#FEF3C7',
                                                        borderRadius: '50%',
                                                        width: 24,
                                                        height: 24,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>😊</Box>
                                                </Box>

                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                    2 items
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Order actions section */}
                                        <Box sx={{
                                            borderTop: '1px solid #f0f0f0',
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Chip
                                                    label="#001"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <IconButton size="small" sx={{ p: 0 }} onClick={() => setIsModalVisible(true)}>
                                                    <Box component="span" sx={{ color: '#ef4444', fontSize: '1rem' }}>🗑️</Box>
                                                </IconButton>
                                                {isModalVisible && <CancelOrder onClose={() => setIsModalVisible(false)} onConfirm={handleCancelOrder} />}
                                                {isNotificationVisible && (
                                                    <Box
                                                        sx={{
                                                            position: "fixed",
                                                            top: "5%",
                                                            right: "2%",
                                                            zIndex: 2000,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            bgcolor: "#E6FAE6",
                                                            color: "#333",
                                                            borderRadius: 2,
                                                            p: 2,
                                                            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                                                            minWidth: 300,
                                                        }}
                                                    >
                                                        <Typography sx={{ fontWeight: "bold", mr: 1 }}>✅ Order Canceled!</Typography>
                                                        <Typography sx={{ fontSize: "0.875rem" }}>Order id <b>#Order002</b> has been canceled</Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<Box component="span" sx={{ fontSize: '0.875rem' }}>✓</Box>}
                                                sx={{
                                                    bgcolor: '#0e3151',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    borderRadius: 0,
                                                    px: 2,
                                                    py: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&:hover': {
                                                        bgcolor: '#0a2540'
                                                    }
                                                }}
                                            >
                                                Process Order
                                            </Button>
                                        </Box>
                                    </Box>

                                    {/* Order 2 */}

                                    <Box sx={{
                                        bgcolor: '#F6F6F6',
                                        borderRadius: 1,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                        mt: 2
                                    }}>
                                        {/* Customer info section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{
                                                mr: 2,
                                                bgcolor: '#f0f0f0',
                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Box component="span" sx={{ fontSize: '1.2rem' }}>🚚</Box>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                        Annette Black
                                                    </Typography>
                                                    <Box component="span" sx={{
                                                        color: '#f59e0b',
                                                        fontSize: '1.2rem',
                                                        bgcolor: '#FEF3C7',
                                                        borderRadius: '50%',
                                                        width: 24,
                                                        height: 24,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>🔒</Box>
                                                </Box>

                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                    2 items
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Order actions section */}
                                        <Box sx={{
                                            borderTop: '1px solid #f0f0f0',
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Chip
                                                    label="#001"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <IconButton size="small" sx={{ p: 0 }}>
                                                    <Box component="span" sx={{ color: '#ef4444', fontSize: '1rem' }}>🗑️</Box>
                                                </IconButton>
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<Box component="span" sx={{ fontSize: '0.875rem' }}>✓</Box>}
                                                sx={{
                                                    bgcolor: '#0e3151',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    borderRadius: 0,
                                                    px: 2,
                                                    py: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&:hover': {
                                                        bgcolor: '#0a2540'
                                                    }
                                                }}
                                            >
                                                Process Order
                                            </Button>
                                        </Box>
                                    </Box>

                                    {/* Order 3 */}

                                    <Box sx={{
                                        bgcolor: '#F6F6F6',
                                        borderRadius: 1,
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                        mt: 2
                                    }}>
                                        {/* Customer info section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{
                                                mr: 2,
                                                bgcolor: '#f0f0f0',
                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Box component="span" sx={{ fontSize: '1.2rem' }}>🚚</Box>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                        Bessie Cooper
                                                    </Typography>
                                                    <Box component="span" sx={{
                                                        color: '#f59e0b',
                                                        fontSize: '1.2rem',
                                                        bgcolor: '#FEF3C7',
                                                        borderRadius: '50%',
                                                        width: 24,
                                                        height: 24,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>⭐</Box>
                                                </Box>

                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                    2 items
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Order actions section */}
                                        <Box sx={{
                                            borderTop: '1px solid #f0f0f0',
                                            p: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Chip
                                                    label="#001"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        height: 24,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'medium'
                                                    }}
                                                />
                                                <IconButton size="small" sx={{ p: 0 }}>
                                                    <Box component="span" sx={{ color: '#ef4444', fontSize: '1rem' }}>🗑️</Box>
                                                </IconButton>
                                            </Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<Box component="span" sx={{ fontSize: '0.875rem' }}>✓</Box>}
                                                sx={{
                                                    bgcolor: '#0e3151',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    borderRadius: 0,
                                                    px: 2,
                                                    py: 0.5,
                                                    fontSize: '0.875rem',
                                                    '&:hover': {
                                                        bgcolor: '#0a2540'
                                                    }
                                                }}
                                            >
                                                Process Order
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        {/* third column */}
                        <Grid item xs={12} md={3.3}>
                            <Box sx={{ height: '100%', bgcolor: '#D9D9D9', borderRadius: '5px' }}>
                                {/* Header */}
                                <Box sx={{
                                    display: 'flex',
                                    p: 1,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#121212' }}

                                        >
                                            Order Queue
                                        </Typography>
                                        <img src={arrow} alt="" style={{
                                            height: '32px',
                                            width: '32px',
                                            marginLeft: '10px',
                                            cursor: 'pointer'
                                        }}
                                            onClick={() => navigate('/order/queue')} />

                                        {/* <IconButton size="small" sx={{ border: '1px solid #e0e0e0' }}
                                        onClick={() => navigate('/order/queue')}
                                    >
                                        <MoreVert fontSize="small" />
                                    </IconButton> */}
                                    </Box>
                                    <Box sx={{ display: 'flex', width: '145px', height: '48px', alignItems: 'center' }}>

                                        <Button
                                            variant="outlined"
                                            sx={{
                                                width: '100%',

                                                bgcolor: 'transparent',
                                                borderRadius: 20,
                                                borderColor: '#063455',
                                                color: '#333',
                                                textTransform: 'none',
                                                // px: 2
                                            }}
                                        >
                                            Order Saved
                                            <Box
                                                component="span"
                                                sx={{
                                                    ml: 1,
                                                    bgcolor: '#1976d2',
                                                    color: 'white',
                                                    borderRadius: '50%',
                                                    width: 20,
                                                    height: 20,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '0.75rem'
                                                }}
                                            >
                                                1
                                            </Box>
                                        </Button>
                                    </Box>
                                </Box>

                                {/* Customer Cards */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 1 }}>
                                    {/* Customer 1 */}
                                    <Paper sx={{ p: 2, borderRadius: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        minWidth: 40,
                                                        height: 40,
                                                        p: 0
                                                    }}
                                                >
                                                    T2
                                                </Button>
                                                <IconButton size="small" sx={{ bgcolor: '#f5f5f5', height: 40, width: 40 }}>
                                                    <Print fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Rs 47.00</Typography>
                                        </Box>

                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                            Qafi Latif
                                            <Box component="span" sx={{ color: '#f59e0b', fontSize: '1.2rem', ml: 1 }}>⭐</Box>
                                        </Typography>

                                        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
                                            4 items (<Typography component="span" variant="caption" sx={{ color: '#10b981' }}>1 Complete</Typography>)
                                        </Typography>

                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Chip
                                                label="#001"
                                                size="small"
                                                sx={{ bgcolor: '#f5f5f5', borderRadius: 1, height: 24 }}
                                            />
                                            <Chip
                                                label="Ready to serve"
                                                size="small"
                                                sx={{ bgcolor: '#f5f5f5', borderRadius: 1, height: 24 }}
                                                icon={<Box component="span" sx={{ fontSize: '0.75rem', ml: 1 }}>✓</Box>}
                                            />
                                        </Box>
                                    </Paper>

                                    {/* Customer 2 */}
                                    <Paper sx={{ p: 2, borderRadius: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        minWidth: 40,
                                                        height: 40,
                                                        p: 0
                                                    }}
                                                >
                                                    T3
                                                </Button>
                                                <IconButton size="small" sx={{ bgcolor: '#f5f5f5', height: 40, width: 40 }}>
                                                    <Print fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <IconButton size="small" sx={{ border: '1px solid #e0e0e0', height: 40, width: 40 }}>
                                                    <Chat fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small" sx={{ bgcolor: '#0e3151', color: 'white', height: 40, width: 40 }}>
                                                    <Add fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </Box>

                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                            Hamid Indra
                                            <Box component="span" sx={{ color: '#f59e0b', fontSize: '1.2rem', ml: 1 }}>⭐</Box>
                                        </Typography>

                                        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
                                            4 items (<Typography component="span" variant="caption" sx={{ color: '#10b981' }}>1 Complete</Typography>)
                                        </Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label="#003"
                                                    size="small"
                                                    sx={{ bgcolor: '#f5f5f5', borderRadius: 1, height: 24 }}
                                                />
                                                <Chip
                                                    label="Waiting to payment"
                                                    size="small"
                                                    sx={{ bgcolor: '#f5f5f5', borderRadius: 1, height: 24 }}
                                                    icon={<Box component="span" sx={{ fontSize: '0.75rem', ml: 1 }}>⬜</Box>}
                                                />
                                            </Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Rs 47.00</Typography>
                                        </Box>
                                    </Paper>

                                    {/* Customer 3 */}
                                    <Paper sx={{ p: 2, borderRadius: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#1976d2',
                                                        color: 'white',
                                                        borderRadius: '50%',
                                                        minWidth: 40,
                                                        height: 40,
                                                        p: 0
                                                    }}
                                                >
                                                    T4
                                                </Button>
                                                <IconButton size="small" sx={{ bgcolor: '#f5f5f5', height: 40, width: 40 }}>
                                                    <Print fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <IconButton size="small" sx={{ border: '1px solid #e0e0e0', height: 40, width: 40 }}>
                                                    <Chat fontSize="small" />
                                                </IconButton>
                                                <IconButton size="small" sx={{ bgcolor: '#0e3151', color: 'white', height: 40, width: 40 }}>
                                                    <Add fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </Box>

                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                            Miles Esther
                                            <Box component="span" sx={{ color: '#f59e0b', fontSize: '1.2rem', ml: 1 }}>⭐</Box>
                                        </Typography>

                                        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
                                            4 items (<Typography component="span" variant="caption" sx={{ color: '#10b981' }}>1 Complete</Typography>)
                                        </Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label="#004"
                                                    size="small"
                                                    sx={{ bgcolor: '#f5f5f5', borderRadius: 1, height: 24 }}
                                                />
                                                <Chip
                                                    label="Cooking process"
                                                    size="small"
                                                    sx={{ bgcolor: '#f5f5f5', borderRadius: 1, height: 24 }}
                                                    icon={<Box component="span" sx={{ fontSize: '0.75rem', ml: 1 }}>⚪</Box>}
                                                />
                                            </Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Rs 47.00</Typography>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default Dashboard
