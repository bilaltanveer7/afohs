"use client"

import React, { useState } from "react"
import { Box, Typography, Button, Paper, Grid, TextField, InputAdornment, Divider, Container } from "@mui/material"
import { ArrowForward, Backspace } from "@mui/icons-material"
import "bootstrap/dist/css/bootstrap.min.css"

const PaymentPage = () => {
  const [selectedTab, setSelectedTab] = useState("Regular Bill")
  const [selectedPayment, setSelectedPayment] = useState("Cash")
  const [inputAmount, setInputAmount] = useState("10.00")
  const [customerChanges, setCustomerChanges] = useState("0,00")

  const orderItems = [
    { name: "Cappuccino", quantity: 2, price: 5.00, total: 10.00 },
    { name: "Soda Beverage", quantity: 3, price: 5.00, total: 15.00 },
    { name: "Chocolate Croissant", quantity: 2, price: 5.00, total: 10.00 },
    { name: "French Toast Sugar", quantity: 3, price: 4.00, total: 12.00 },
  ]

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }

  const handlePaymentMethodClick = (method) => {
    setSelectedPayment(method)
  }

  const handleQuickAmountClick = (amount) => {
    setInputAmount(amount)
  }

  const handleNumberClick = (number) => {
    if (inputAmount === "10.00") {
      setInputAmount(number)
    } else {
      setInputAmount(inputAmount + number)
    }
  }

  const handleDeleteClick = () => {
    if (inputAmount.length > 1) {
      setInputAmount(inputAmount.slice(0, -1))
    } else {
      setInputAmount("0")
    }
  }

  const handleDecimalClick = () => {
    if (!inputAmount.includes(".")) {
      setInputAmount(inputAmount + ".")
    }
  }

  return (
    <Container maxWidth="lg" disableGutters>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          // overflow: "hidden",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          // mb: 15
        }}
      >
        {/* Left Sidebar */}
        <Box
          sx={{
            width: "250px",
            bgcolor: "#e3f2fd",
            p: 2,
            borderRight: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            // justifyContent:'center',
            alignItems:'center',
            height:'100%'
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#0a4b78",
              mb: 1,
            }}
          >
            IMAJI Coffee.
          </Typography>

          {/* Date and Time */}
          <Typography
            variant="caption"
            sx={{
              color: "#666",
              mb: 2,
            }}
          >
            Wed, May 27, 2020 • 9:27:53 AM
          </Typography>

          {/* Order ID */}
          <Box
            sx={{
              border: "1px dashed #90caf9",
              borderRadius: "4px",
              p: 2,
              mb: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#666",
                display: "block",
                mb: 0.5,
              }}
            >
              Order Id
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#333",
              }}
            >
              ORDER001
            </Typography>
          </Box>

          {/* Order Details */}
          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={4}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Cashier
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                Tynisha Obey
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={4}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Working Time
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                15.00 - 22.00 PM
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2, bgcolor:'black' }} />

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={4}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Customer Name
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                Ravi Kamil
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={4}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Number Id Card
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                -
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={4}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Order Type
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                Dine In
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={4}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Table Number
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                T2
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />

          {/* Order Items */}
          <Box sx={{ mb: 2, flex: 1, overflow: "auto" }}>
            {orderItems.map((item, index) => (
              <Grid container spacing={1} key={index} sx={{ mb: 1 }}>
                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ color: "#666", display: "block" }}>
                    {item.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    {item.quantity} x Rs {item.price.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="caption" sx={{ color: "#333" }}>
                    Rs {item.total.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          {/* <Divider sx={{ my: 1.5 }} /> */}

          {/* Order Summary */}
          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={6}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Subtotal
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                Rs 47.00
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={6}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Discount
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                Rs 0
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid item xs={6}>
              <Typography variant="caption" sx={{ color: "#666" }}>
                Tax (12%)
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "#333" }}>
                Rs 5.64
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />

          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0a4b78" }}>
                Total Amount
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0a4b78" }}>
                Rs 52.64
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="caption" sx={{ color: "#666", mb: 2, fontSize: "0.65rem" }}>
            Thanks for having our passion. Drop by again. If your orders aren't still visible, you're always welcome
            here!
          </Typography>

          {/* Bottom Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#0a4b78",
              mt: "auto",
            }}
          >
            IMAJI Coffee.
          </Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Payment
            </Typography>

            {/* Tabs */}
            <Box sx={{ display: "flex" }}>
              <Button
                variant={selectedTab === "Regular Bill" ? "contained" : "text"}
                onClick={() => handleTabClick("Regular Bill")}
                sx={{
                  bgcolor: selectedTab === "Regular Bill" ? "#0a4b78" : "transparent",
                  color: selectedTab === "Regular Bill" ? "white" : "#666",
                  borderRadius: "4px 0 0 4px",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: selectedTab === "Regular Bill" ? "#0a4b78" : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Regular Bill
              </Button>
              <Button
                variant={selectedTab === "Split Bill" ? "contained" : "text"}
                onClick={() => handleTabClick("Split Bill")}
                sx={{
                  bgcolor: selectedTab === "Split Bill" ? "#0a4b78" : "transparent",
                  color: selectedTab === "Split Bill" ? "white" : "#666",
                  borderRadius: "0 4px 4px 0",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: selectedTab === "Split Bill" ? "#0a4b78" : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Split Bill
              </Button>
            </Box>
          </Box>

          {/* Payment Methods */}
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper
                  elevation={selectedPayment === "Cash" ? 3 : 1}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    bgcolor: selectedPayment === "Cash" ? "#bbdefb" : "white",
                    border: selectedPayment === "Cash" ? "1px solid #90caf9" : "1px solid #eee",
                    "&:hover": {
                      bgcolor: selectedPayment === "Cash" ? "#bbdefb" : "#f5f5f5",
                    },
                  }}
                  onClick={() => handlePaymentMethodClick("Cash")}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V8C22 6.9 21.1 6 20 6H4C2.9 6 2 6.9 2 8Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 12H6.01M18 12H18.01" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    Cash
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  elevation={selectedPayment === "Bank Transfer" ? 3 : 1}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    bgcolor: selectedPayment === "Bank Transfer" ? "#bbdefb" : "white",
                    border: selectedPayment === "Bank Transfer" ? "1px solid #90caf9" : "1px solid #eee",
                    "&:hover": {
                      bgcolor: selectedPayment === "Bank Transfer" ? "#bbdefb" : "#f5f5f5",
                    },
                  }}
                  onClick={() => handlePaymentMethodClick("Bank Transfer")}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10V17C4 19.2091 5.79086 21 8 21H16C18.2091 21 20 19.2091 20 17V10M4 10V7C4 4.79086 5.79086 3 8 3H16C18.2091 3 20 4.79086 20 7V10M4 10H20" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 15H16" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 18H12" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    Bank Transfer
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  elevation={selectedPayment === "QR Code" ? 3 : 1}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    bgcolor: selectedPayment === "QR Code" ? "#bbdefb" : "white",
                    border: selectedPayment === "QR Code" ? "1px solid #90caf9" : "1px solid #eee",
                    "&:hover": {
                      bgcolor: selectedPayment === "QR Code" ? "#bbdefb" : "#f5f5f5",
                    },
                  }}
                  onClick={() => handlePaymentMethodClick("QR Code")}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3H10V10H3V3Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 3H21V10H14V3Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 14H10V21H3V14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 14H21V21H14V14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    QR Code
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Amount Input and Customer Changes */}
          <Box sx={{ px: 2, py: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                  Input Amount
                </Typography>
                <TextField
                  fullWidth
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "4px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                  Customer Changes
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "56px",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#333" }}>
                    Rs {customerChanges}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Quick Amount Buttons */}
          <Box sx={{ px: 2, py: 1 }}>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => handleQuickAmountClick("52.64")}
                  sx={{
                    borderColor: "#ccc",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#aaa",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  Exact money
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => handleQuickAmountClick("10.00")}
                  sx={{
                    borderColor: "#ccc",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#aaa",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  Rs 10.00
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => handleQuickAmountClick("20.00")}
                  sx={{
                    borderColor: "#ccc",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#aaa",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  Rs 20.00
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => handleQuickAmountClick("50.00")}
                  sx={{
                    borderColor: "#ccc",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#aaa",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  Rs 50.00
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => handleQuickAmountClick("100.00")}
                  sx={{
                    borderColor: "#ccc",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#aaa",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  Rs 100.00
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Numeric Keypad */}
          <Box sx={{ p: 2, mb:1}}>
            <Grid container spacing={0}>
              <Grid item xs={4} sx={{
                // p:5
              }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("1")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  1
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("2")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  2
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("3")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  3
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("4")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  4
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("5")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  5
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("6")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  6
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("7")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  7
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("8")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  8
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("9")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  9
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleDecimalClick}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  .
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNumberClick("0")}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#eee",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ddd",
                      bgcolor: "#f5f5f5",
                    },
                  }}
                >
                  0
                </Button>
              </Grid>
              <Grid item xs={4} sx={{
              mt:1}}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleDeleteClick}
                  sx={{
                    width: "180px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderColor: "#ffcdd2",
                    bgcolor: "#ffebee",
                    color: "#d32f2f",
                    "&:hover": {
                      borderColor: "#ef9a9a",
                      bgcolor: "#ffcdd2",
                    },
                  }}
                >
                  <Backspace />
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
              borderTop: "1px solid #eee",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#666",
                mr: 2,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: "#0a4b78",
                color: "white",
                "&:hover": {
                  bgcolor: "#083c61",
                },
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>

      </Box>
    </Container>
  )
}

export default PaymentPage