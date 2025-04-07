import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  InputAdornment,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import { 
  QrCodeScanner, 
  CalendarMonth, 
  KeyboardArrowDown,
  AccessTime,
  ArrowForward
} from '@mui/icons-material';

const ReservationDialog = () => {
  const [selectedDate, setSelectedDate] = useState(7);
  const [selectedTime, setSelectedTime] = useState('custom');
  const [percentage, setPercentage] = useState(false);
  
  const days = ['Sun', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = [7, 8, 9, 10, 11, 12, 13];
  
  return (
    <Paper
      elevation={0}
      sx={{ 
        width: '100%', 
        // maxWidth: 600, 
        mx: 'auto',
        p: 2,
        // border: '1px dashed #90caf9'
      }}
    >
      {/* Customer Name */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Customer Name or Scan Member Card
        </Typography>
        <TextField
          fullWidth
          placeholder="Entry name"
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <QrCodeScanner sx={{ color: '#9e9e9e' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 1
            }
          }}
        />
      </Box>
      
      {/* Customer Qty and Down Payment */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
            Customer Qty
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <TextField
              placeholder="10"
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px 0 0 4px',
                  borderRight: 'none'
                },
                width: '50%'
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderLeft: 'none',
                borderRadius: '0 4px 4px 0',
                px: 2,
                bgcolor: '#f5f5f5',
                width: '50%'
              }}
            >
              <Typography variant="body2">Person</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Down Payment
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 1, color: percentage ? '#9e9e9e' : 'inherit' }}>
                Percentage
              </Typography>
              <Switch 
                size="small" 
                checked={percentage}
                onChange={() => setPercentage(!percentage)}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRight: 'none',
                borderRadius: '4px 0 0 4px',
                px: 2,
                bgcolor: '#f5f5f5'
              }}
            >
              <Typography variant="body2">Rs</Typography>
            </Box>
            <TextField
              placeholder="10"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0 4px 4px 0',
                  borderLeft: 'none'
                }
              }}
            />
          </Box>
        </Grid>
      </Grid>
      
      {/* Select Date */}
      <Box sx={{ mb: 3, position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Select Date
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              July 2024
            </Typography>
            <IconButton size="small">
              <KeyboardArrowDown />
            </IconButton>
          </Box>
        </Box>
        
        {/* Calendar */}
        <Grid container sx={{ border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 1 }}>
          <Grid item xs={1} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            py: 1
          }}>
            <CalendarMonth sx={{ color: '#1976d2', fontSize: 20 }} />
            <Typography variant="caption" sx={{ mt: 0.5 }}>Week 2</Typography>
          </Grid>
          
          {days.map((day, index) => (
            <Grid 
              item 
              xs={1.57} 
              key={index} 
              sx={{ 
                textAlign: 'center',
                borderRight: index < 6 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                bgcolor: selectedDate === dates[index] ? '#bbdefb' : 'transparent',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: selectedDate === dates[index] ? '#bbdefb' : '#f5f5f5'
                },
                py: 1
              }}
              onClick={() => setSelectedDate(dates[index])}
            >
              <Typography variant="caption" sx={{ color: '#757575' }}>
                {day}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: selectedDate === dates[index] ? 'bold' : 'normal' }}>
                {dates[index]}
              </Typography>
            </Grid>
          ))}
        </Grid>
        
        {/* Fully Booked Badge */}
        <Chip 
          label="Fully Booked" 
          sx={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            bgcolor: 'black',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 1,
            zIndex: 1
          }}
        />
      </Box>
      
      {/* Select Time of Attendance */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
          Select Time of Attendance
        </Typography>
        <RadioGroup 
          row 
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <FormControlLabel 
            value="10:00" 
            control={<Radio size="small" />} 
            label="10:00 am" 
            sx={{ mr: 2 }}
          />
          <FormControlLabel 
            value="13:00" 
            control={<Radio size="small" />} 
            label="13:00 pm" 
            sx={{ mr: 2 }}
          />
          <FormControlLabel 
            value="14:00" 
            control={<Radio size="small" />} 
            label="14:00 pm" 
            sx={{ mr: 2 }}
          />
          <FormControlLabel 
            value="18:00" 
            control={<Radio size="small" />} 
            label="18:00 pm" 
            sx={{ mr: 2 }}
          />
          <FormControlLabel 
            value="custom" 
            control={<Radio size="small" color="primary" />} 
            label="Custom" 
          />
        </RadioGroup>
      </Box>
      
      {/* Custom Time */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
            Select Custom Time
          </Typography>
          <TextField
            fullWidth
            placeholder="Select time"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccessTime sx={{ color: '#9e9e9e' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
            Select Custom Time
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            23 Person
          </Typography>
        </Grid>
      </Grid>
      
      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button
          variant="text"
          sx={{
            color: '#616161',
            textTransform: 'none',
            fontWeight: 'medium'
          }}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#e0e0e0',
            color: '#616161',
            textTransform: 'none',
            fontWeight: 'medium'
          }}
        >
          Save Order
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            bgcolor: '#0c4a6e',
            textTransform: 'none',
            fontWeight: 'medium',
            '&:hover': {
              bgcolor: '#083654'
            }
          }}
        >
          Choose Menu
        </Button>
      </Box>
    </Paper>
  );
};

export default ReservationDialog;