import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Paper,
  Badge,
  Avatar,
  Divider,
  Link
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const NotificationsPanel = () => {
  const notifications = [
    {
      customer: {
        name: 'Miles Esther',
        icon: 'shipping',
        time: '3 mins ago',
        orderType: 'New Order',
        orderNumber: '307',
        items: 4
      },
      orderItems: [
        {
          name: 'Cappuccino',
          variant: 'Ice, Large, Normal sugar',
          quantity: 1,
          price: 5.00,
          image: '/cappuccino.jpg'
        },
        {
          name: 'Buttermilk Waffle',
          variant: 'Choco',
          quantity: 2,
          price: 5.00,
          image: '/waffle.jpg'
        }
      ],
      hasMoreItems: true
    },
    {
      customer: {
        name: 'Annette Black',
        icon: 'lock',
        time: '2 mins ago',
        orderType: 'New Order',
        orderNumber: '437',
        items: 2
      },
      orderItems: [
        {
          name: 'Cappuccino',
          variant: 'Ice, Large, Normal sugar',
          quantity: 1,
          price: 5.00,
          image: '/cappuccino.jpg'
        },
        {
          name: 'Buttermilk Waffle',
          variant: 'Choco',
          quantity: 2,
          price: 5.00,
          image: '/waffle.jpg'
        }
      ],
      hasMoreItems: false
    },
    {
      customer: {
        name: 'Bessie Cooper',
        icon: 'shipping',
        time: '1 min ago',
        orderType: 'Order Cancelled',
        orderNumber: '307',
        items: 4
      },
      orderItems: [],
      hasMoreItems: false
    },
    {
      customer: {
        name: 'Bessie Cooper',
        icon: 'shipping',
        time: '1 min ago',
        orderType: 'Order Cancelled',
        orderNumber: null,
        items: null
      },
      orderItems: [],
      hasMoreItems: false
    }
  ];

  const getCustomerIcon = (iconType) => {
    switch (iconType) {
      case 'shipping':
        return <LocalShippingIcon sx={{ fontSize: 16, color: 'white' }} />;
      case 'lock':
        return <LockIcon sx={{ fontSize: 16, color: 'white' }} />;
      default:
        return <LocalShippingIcon sx={{ fontSize: 16, color: 'white' }} />;
    }
  };

  return (
    <Paper
      sx={{
        width: '100%',
        mx: 'auto',
        height: '100vh',
      }}
    >
      {/* Header */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3,
        position:'sticky',
        top:0,
        zIndex:10,
        bgcolor:'white'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // mt: 1,
          width: '33%'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
            Notifications
          </Typography>
          <Badge
            badgeContent="5"
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '0.75rem',
                fontWeight: 'bold',
                // ml:1
              }
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#6b7280',
              fontSize: '0.875rem',
              mt: 1
            }}
          >
            Mark all as read
          </Link>
        </Box>
      </Box>

      <Divider sx={{
        height: '1px',
        backgroundColor: 'black',  // Ensures the divider is dark
        opacity: 1,                // Makes it fully visible
        borderBottomWidth: '1px'
      }} />

      {/* Notifications List */}
      <Box sx={{ bgcolor: '#f1f5f9', maxHeight: 600, overflow: 'auto' }}>
        {notifications.map((notification, index) => (
          <Box key={index} sx={{ mb: 0 }}>
            {/* Customer Info */}
            <Box sx={{
              p: 2,
              borderBottom: index < notifications.length - 1 ? '1px solid #f0f0f0' : 'none',
              display: 'flex',
              alignItems: 'center',
              bgcolor:'#E3F2FD'
            }}>
              <Avatar
                sx={{
                  bgcolor: notification.customer.icon === 'lock' ? '#6b7280' : '#1976d2',
                  width: 36,
                  height: 36,
                  mr: 1.5
                }}
              >
                {getCustomerIcon(notification.customer.icon)}
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
                    {notification.customer.name}
                  </Typography>
                  <Typography variant="caption" sx={{
                    color: notification.customer.orderType === 'Order Cancelled' ? '#ef4444' : '#1976d2',
                    fontWeight: 500
                  }}>
                    • {notification.customer.orderType}
                  </Typography>
                </Box>
                {notification.customer.orderNumber && (
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    Order #{notification.customer.orderNumber} • {notification.customer.items} items
                  </Typography>
                )}
              </Box>
              <Typography variant="caption" sx={{ color: '#6b7280', ml: 1 }}>
                {notification.customer.time}
              </Typography>
            </Box>

            {/* Order Items */}
            {notification.orderItems.length > 0 && (
              <Box sx={{ bgcolor:'#E3F2FD', px: 2, pb: notification.hasMoreItems ? 0 : 2 }}>
                {notification.orderItems.map((item, itemIndex) => (
                  <Box
                    key={itemIndex}
                    sx={{
                      display: 'flex',
                      py: 1.5,
                      borderTop: itemIndex > 0 ? '1px solid #f0f0f0' : 'none'
                    }}
                  >
                    <Avatar
                      src={item.image}
                      variant="rounded"
                      sx={{
                        width: 40,
                        height: 40,
                        mr: 1.5,
                        bgcolor: '#f3f4f6'
                      }}
                    >
                      {item.name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#6b7280' }}>
                        Variant: {item.variant}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        Qty: {item.quantity} x Rs {item.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        Rs {(item.quantity * item.price).toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                ))}

                {/* More menu and See Detail */}
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1.5,
                  borderTop: '1px solid #f0f0f0'
                }}>
                  {notification.hasMoreItems ? (
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      + More menu
                    </Typography>
                  ) : (
                    <Box />
                  )}
                  <Button
                    endIcon={<ArrowForwardIosIcon sx={{ fontSize: 12 }} />}
                    sx={{
                      color: '#1976d2',
                      textTransform: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    See Detail
                  </Button>
                </Box>
              </Box>
            )}

            <Divider sx={{ mt: 0.5 }} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default NotificationsPanel;