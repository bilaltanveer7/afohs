import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TakeAwayDialog from './takeaway';
import DineDialog from './dine';

const NewOrderDialog = () => {
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
    <Paper
      elevation={1}
      sx={{
        width: '100%',
        mx: 'auto',
        overflow: 'hidden',
        zIndex: 9999
      }}
    >
      {/* Header */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'white'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          New Order
        </Typography>
      </Box>

      {/* Order Type Selection */}
      <Box sx={{ px: 2, mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Choose Order Type
        </Typography>
        <ToggleButtonGroup
          value={orderType}
          exclusive
          onChange={handleOrderTypeChange}
          aria-label="order type"
          sx={{ width: '100%' }}
        >
          <ToggleButton
            value="dineIn"
            aria-label="dine in"
            sx={{
              flex: 1,
              py: 1.5,
              flexDirection: 'column',
              textTransform: 'none',
              backgroundColor: orderType === 'dineIn' ? '#e3f2fd' : 'transparent',
              color: orderType === 'dineIn' ? '#1976d2' : 'inherit',
              '&.Mui-selected': {
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#d0e8fb'
                }
              }
            }}
          >
            <RestaurantIcon sx={{ mb: 0.5 }} />
            <Typography variant="body2">Dine In</Typography>
          </ToggleButton>
          <ToggleButton
            value="takeaway"
            aria-label="takeaway"
            sx={{
              flex: 1,
              py: 1.5,
              flexDirection: 'column',
              textTransform: 'none',
              '&.Mui-selected': {
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#d0e8fb'
                }
              }
            }}
          >
            <TakeoutDiningIcon sx={{ mb: 0.5 }} />
            <Typography variant="body2">Takeaway</Typography>
          </ToggleButton>
          <ToggleButton
            value="reservation"
            aria-label="reservation"
            sx={{
              flex: 1,
              py: 1.5,
              flexDirection: 'column',
              textTransform: 'none',
              '&.Mui-selected': {
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#d0e8fb'
                }
              }
            }}
          >
            <EventSeatIcon sx={{ mb: 0.5 }} />
            <Typography variant="body2">Reservation</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* {orderType === 'takeaway' && (
        <Box sx={{ px: 2, mb: 2 }}>
          <TakeAwayDialog />
        </Box>
      )} */}
      {orderType === 'dineIn' && <DineDialog />}
      {orderType === 'takeaway' && <TakeAwayDialog />}
    </Paper>
  );
};

export default NewOrderDialog;