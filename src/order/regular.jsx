import React, { useState } from "react"
import { Box, Typography, Button, Paper, Grid, TextField, InputAdornment, Divider, Container } from "@mui/material"
import { ArrowForward, Backspace } from "@mui/icons-material"
import "bootstrap/dist/css/bootstrap.min.css"
import BankScreen from "./bank"
import QRCodeScreen from "./qrcode"
import CashScreen from "./cash"
import cashicon from '../assetts/money-bills.png'
import bankicon from '../assetts/credit-card-change.png'
import qricon from '../assetts/scan-qr.png'

const RegularBill = () => {
    const [selectedTab, setSelectedTab] = useState("Regular Bill")
    const [selectedPayment, setSelectedPayment] = useState("Cash")
    const [inputAmount, setInputAmount] = useState("10.00")
    const [customerChanges, setCustomerChanges] = useState("0,00")

    const renderPaymentScreen = () => {
        switch (selectedPayment) {
            case "Cash":
                return <CashScreen />;
            case "Bank Transfer":
                return <BankScreen />;
            case "QR Code":
                return <QRCodeScreen />;
            default:
                return null;
        }
    };

    const paymentIcons = {
        "Cash": cashicon,
        "Bank Transfer": bankicon,
        "QR Code": qricon,
    };

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
        <>
            <Box>
                {/* Payment Methods */}
                <Box sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                        {["Cash", "Bank Transfer", "QR Code"].map((method, index) => (
                            <Grid item xs={4} key={method}>
                                <Paper
                                    elevation={selectedPayment === method ? 3 : 1}
                                    sx={{
                                        p: 2,
                                        textAlign: "center",
                                        cursor: "pointer",
                                        bgcolor: selectedPayment === method ? "#bbdefb" : "white",
                                        border: selectedPayment === method ? "1px solid #90caf9" : "1px solid #eee",
                                        "&:hover": {
                                            bgcolor: selectedPayment === method ? "#bbdefb" : "#f5f5f5",
                                        },
                                    }}
                                    onClick={() => handlePaymentMethodClick(method)}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            mb: 1,
                                        }}
                                    >
                                        <img
                                            src={paymentIcons[method]}
                                            alt={method}
                                            style={{
                                                height: 20,
                                                width: 20,
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body2" sx={{ color: "#333" }}>
                                        {method}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ p: 2 }}>
                    {renderPaymentScreen()}
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
            </Box >
        </>
    )
}

export default RegularBill
