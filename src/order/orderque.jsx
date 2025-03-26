import React, { useState } from 'react'
import SideNav from '../sidebar/sidenav';
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    Button,
    Card,
    CardContent,
    IconButton,
    Chip,
    Avatar,
    ThemeProvider,
    createTheme,
} from "@mui/material"
import { ArrowBack, Add, Visibility, LocalDining } from "@mui/icons-material"
import "bootstrap/dist/css/bootstrap.min.css"

const drawerWidthOpen = 240;
const drawerWidthClosed = 110;

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#f50057",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
})

const OrderQueue = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("All Order")
    const [activeFilter, setActiveFilter] = useState("All Type")

    const tabs = ["Waiting To Payment", "Cooking Process", "Ready To Serve"]

    const filters = ["All Type", "Dine In", "Pick Up", "Delivery", "Takeaway", "Reservation"]

    const orders = [
        {
            id: "T2",
            customer: "Qafi Latif",
            status: "Ready to serve",
            items: [
                { name: "Cappuccino", quantity: 2, unitPrice: 5.00, price: 10.00, completed: true },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
            ],
            totalItems: 4,
            completedItems: 1,
            totalPrice: 47.00,
            hasVIP: true,
            orderNumber: "001",
            color: "#1976d2",
        },
        {
            id: "T3",
            customer: "Hamid Indra",
            status: "Waiting to payment",
            items: [
                { name: "Cappuccino", quantity: 2, unitPrice: 5.00, price: 10.00, completed: true },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: true },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
            ],
            totalItems: 4,
            completedItems: 3,
            totalPrice: 47.00,
            hasVIP: true,
            orderNumber: "001",
            color: "#1976d2",
        },
        {
            id: "T4",
            customer: "Miles Esther",
            status: "Cooking process",
            items: [
                { name: "Cappuccino", quantity: 2, unitPrice: 5.00, price: 10.00, completed: true },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
            ],
            totalItems: 4,
            completedItems: 1,
            totalPrice: 47.00,
            hasVIP: true,
            orderNumber: "001",
            color: "#1976d2",
        },
        {
            id: "DE",
            customer: "Miles Esther",
            status: "Cooking process",
            items: [
                { name: "Orange juice", quantity: 2, unitPrice: 5.00, price: 10.00, completed: false },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
            ],
            totalItems: 4,
            completedItems: 0,
            totalPrice: 10.00,
            hasVIP: false,
            orderNumber: "001",
            color: "#03a9f4",
            deliveryIcon: true,
        },
        {
            id: "PI",
            customer: "Black Marvin",
            status: "Cooking process",
            items: [
                { name: "Cappuccino", quantity: 2, unitPrice: 5.00, price: 10.00, completed: false },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
            ],
            totalItems: 4,
            completedItems: 0,
            totalPrice: 20.00,
            hasVIP: false,
            orderNumber: "001",
            color: "#00bcd4",
            pickupIcon: true,
        },
        {
            id: "PI",
            customer: "Wade Warren",
            status: "Cooking process",
            items: [
                { name: "Cappuccino", quantity: 2, unitPrice: 5.00, price: 10.00, completed: false },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
                { name: "Soda Beverage", quantity: 3, unitPrice: 5.00, price: 15.00, completed: false },
            ],
            totalItems: 4,
            completedItems: 0,
            totalPrice: 25.00,
            hasVIP: true,
            orderNumber: "001",
            color: "#4caf50",
            pickupIcon: true,
        },
    ]

    return (
        <>
            <SideNav open={open} setOpen={setOpen} />
            <div style={{
                marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
                transition: "margin-left 0.3s ease-in-out",
                marginTop: '4rem',
                // bgcolor: '#f5f7fa'
            }}>
                <ThemeProvider theme={theme}>
                    <div className="container-fluid p-0" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
                        {/* Header */}
                        <div className="p-3" style={{ backgroundColor: "#f5f5f5" }}>
                            <div className="d-flex align-items-center">
                                <IconButton size="small" style={{ color: "#424242" }}>
                                    <ArrowBack onClick={() => navigate('/dashboard')} />
                                </IconButton>
                                <Typography variant="h5" className="ms-2" style={{ color: "#424242", fontWeight: 500 }}>
                                    Order Queue
                                </Typography>
                            </div>

                            {/* Status Tabs */}
                            <div className="d-flex mt-3 overflow-auto" style={{ gap: "10px" }}>
                                <Button
                                    variant={activeTab === "All Order" ? "contained" : "outlined"}
                                    size="small"
                                    onClick={() => {
                                        setActiveTab("All Order");
                                        navigate('/all/order')
                                    }
                                    }
                                    style={{
                                        borderRadius: "20px",
                                        textTransform: "none",
                                        backgroundColor: activeTab === "All Order" ? "#f0f7ff" : "white",
                                        color: activeTab === "All Order" ? "#1976d2" : "#757575",
                                        border: `1px solid ${activeTab === "All Order" ? "#1976d2" : "#e0e0e0"}`,
                                        boxShadow: "none",
                                        whiteSpace: "nowrap",
                                        fontSize: "13px",
                                        padding: "6px 16px",
                                    }}

                                >
                                    All Order
                                </Button>
                                {tabs.map((tab) => (
                                    <Button
                                        key={tab}
                                        variant={activeTab === tab ? "contained" : "outlined"}
                                        size="small"
                                        onClick={() => setActiveTab(tab)}
                                        style={{
                                            borderRadius: "20px",
                                            textTransform: "none",
                                            backgroundColor: activeTab === tab ? "#f0f7ff" : "white",
                                            color: activeTab === tab ? "#1976d2" : "#757575",
                                            border: `1px solid ${activeTab === tab ? "#1976d2" : "#e0e0e0"}`,
                                            boxShadow: "none",
                                            whiteSpace: "nowrap",
                                            fontSize: "13px",
                                            padding: "6px 16px",
                                        }}
                                    >
                                        {tab}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* All Order Section */}
                        <div className="p-3" style={{ backgroundColor: "#f5f5f5" }}>
                            <Typography variant="body1" style={{ color: "#424242", fontWeight: 500 }}>
                                All Order
                            </Typography>
                        </div>

                        {/* Order Count and Filters */}
                        <div className="p-3 bg-white border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <Typography variant="h4" style={{ fontSize: "28px", fontWeight: 600, color: "#212121" }}>
                                        9
                                    </Typography>
                                    <Typography variant="body2" className="ms-2" style={{ color: "#757575" }}>
                                        Order Queue
                                    </Typography>
                                </div>

                                <div className="d-flex" style={{ gap: "2px", overflowX: "auto" }}>
                                    {filters.map((filter) => (
                                        <Button
                                            key={filter}
                                            variant="text"
                                            size="small"
                                            onClick={() => setActiveFilter(filter)}
                                            style={{
                                                backgroundColor: activeFilter === filter ? "#263238" : "transparent",
                                                color: activeFilter === filter ? "white" : "#757575",
                                                borderRadius: "4px",
                                                textTransform: "none",
                                                fontSize: "12px",
                                                padding: "4px 8px",
                                                minWidth: "auto",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {filter}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Order Cards */}
                        <div className="row g-3 p-3">
                            {orders.map((order, index) => (
                                <div className="col-md-4" key={index}>
                                    <Card
                                        className="h-100 shadow-sm"
                                        style={{ borderRadius: "8px", border: "1px solid #e0e0e0", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}
                                    >
                                        <CardContent className="p-3">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <Avatar
                                                        sx={{
                                                            bgcolor: order.color,
                                                            width: 40,
                                                            height: 40,
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {order.id}
                                                    </Avatar>
                                                    <Avatar
                                                        sx={{
                                                            bgcolor: "#f0f0f0",
                                                            width: 40,
                                                            height: 40,
                                                            ml: 1,
                                                        }}
                                                    >
                                                        <LocalDining fontSize="small" style={{ color: "#757575" }} />
                                                    </Avatar>
                                                </div>
                                                <div className="d-flex">
                                                    {order.id === "T3" && (
                                                        <Button
                                                            variant="outlined"
                                                            size="small"
                                                            sx={{
                                                                minWidth: "40px",
                                                                height: "40px",
                                                                borderColor: "#e0e0e0",
                                                                color: "#424242",
                                                                mr: 1,
                                                                padding: 0,
                                                            }}
                                                        >
                                                            <img
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyZWRpdC1jYXJkIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIi8+PHBhdGggZD0iTTIgMTBoMjAiLz48L3N2Zz4="
                                                                alt="Credit Card"
                                                                style={{ width: "20px", height: "20px" }}
                                                            />
                                                        </Button>
                                                    )}
                                                    {order.id === "T4" && (
                                                        <Button
                                                            variant="outlined"
                                                            size="small"
                                                            sx={{
                                                                minWidth: "40px",
                                                                height: "40px",
                                                                borderColor: "#e0e0e0",
                                                                color: "#424242",
                                                                mr: 1,
                                                                padding: 0,
                                                            }}
                                                        >
                                                            <img
                                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyZWRpdC1jYXJkIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIi8+PHBhdGggZD0iTTIgMTBoMjAiLz48L3N2Zz4="
                                                                alt="Credit Card"
                                                                style={{ width: "20px", height: "20px" }}
                                                            />
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        sx={{
                                                            minWidth: "40px",
                                                            height: "40px",
                                                            bgcolor: "#003366",
                                                            "&:hover": {
                                                                bgcolor: "#002244",
                                                            },
                                                            padding: 0,
                                                        }}
                                                    >
                                                        <Add fontSize="small" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <Typography variant="subtitle1" style={{ fontSize: "16px", fontWeight: 500 }}>
                                                            {order.customer}
                                                        </Typography>
                                                        {order.hasVIP && (
                                                            <div
                                                                className="ms-2"
                                                                style={{
                                                                    width: "18px",
                                                                    height: "18px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "#FFA500",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}
                                                            >
                                                                <span style={{ color: "white", fontSize: "10px", fontWeight: "bold" }}>✓</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Typography variant="body2" style={{ fontSize: "13px", color: "#757575" }}>
                                                        {order.totalItems} Items ({order.id === "T2" ? (
                                                            <span style={{ color: "#4caf50" }}>1 Complete</span>
                                                        ) : order.id === "T3" ? (
                                                            <span style={{ color: "#4caf50" }}>3 Complete</span>
                                                        ) : order.id === "T4" ? (
                                                            <span style={{ color: "#4caf50" }}>1 Complete</span>
                                                        ) : null})
                                                    </Typography>
                                                </div>
                                                <div className="text-end">
                                                    <Typography variant="subtitle1" style={{ fontWeight: 500, fontSize: "16px" }}>
                                                        Rs {order.totalPrice.toFixed(2)}
                                                    </Typography>
                                                </div>
                                            </div>

                                            {/* Order Items */}
                                            <div className="mt-3">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="d-flex justify-content-between align-items-center mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div
                                                                className="me-2"
                                                                style={{
                                                                    width: "8px",
                                                                    height: "8px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: item.completed ? "#4caf50" : "#bdbdbd",
                                                                }}
                                                            ></div>
                                                            <Typography variant="body2" style={{ fontSize: "13px", color: "#616161" }}>
                                                                {item.name}
                                                            </Typography>
                                                        </div>
                                                        <div className="d-flex align-items-center" style={{ fontSize: "13px" }}>
                                                            <span className="text-muted me-4">
                                                                {item.quantity} × Rs {item.unitPrice.toFixed(2)}
                                                            </span>
                                                            <span style={{ fontWeight: 500 }}>Rs {item.price.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                ))}

                                                {order.id === "T2" && (
                                                    <div className="mt-1 mb-2">
                                                        <Typography
                                                            variant="body2"
                                                            style={{
                                                                fontSize: "13px",
                                                                color: "#2196f3",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Show more (3)
                                                        </Typography>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Order Actions */}
                                            <div className="d-flex justify-content-between align-items-center mt-4">
                                                <div
                                                    style={{
                                                        backgroundColor: "#f5f5f5",
                                                        padding: "4px 10px",
                                                        borderRadius: "4px",
                                                        fontSize: "12px",
                                                        color: "#616161",
                                                    }}
                                                >
                                                    #{order.orderNumber}
                                                </div>
                                                <div>
                                                    {order.status === "Ready to serve" && (
                                                        <Button
                                                            variant="text"
                                                            size="small"
                                                            startIcon={<Visibility fontSize="small" />}
                                                            style={{
                                                                backgroundColor: "#e8f5e9",
                                                                color: "#2e7d32",
                                                                textTransform: "none",
                                                                fontSize: "12px",
                                                                padding: "4px 10px",
                                                                borderRadius: "4px",
                                                            }}
                                                        >
                                                            Ready to serve
                                                        </Button>
                                                    )}
                                                    {order.status === "Waiting to payment" && (
                                                        <Button
                                                            variant="text"
                                                            size="small"
                                                            startIcon={
                                                                <img
                                                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyZWRpdC1jYXJkIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIi8+PHBhdGggZD0iTTIgMTBoMjAiLz48L3N2Zz4="
                                                                    alt="Payment"
                                                                    style={{ width: "16px", height: "16px", marginRight: "4px" }}
                                                                />
                                                            }
                                                            style={{
                                                                backgroundColor: "#fff8e1",
                                                                color: "#f57c00",
                                                                textTransform: "none",
                                                                fontSize: "12px",
                                                                padding: "4px 10px",
                                                                borderRadius: "4px",
                                                            }}
                                                        >
                                                            Waiting to payment
                                                        </Button>
                                                    )}
                                                    {order.status === "Cooking process" && (
                                                        <Button
                                                            variant="text"
                                                            size="small"
                                                            startIcon={
                                                                <img
                                                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvb2tpbmctcG90Ij48cGF0aCBkPSJNMTIgMTJhOCA4IDAgMCAwIDgtOEgxMmE4IDggMCAwIDAgOCA4Ii8+PHBhdGggZD0iTTEyIDEyYTggOCAwIDAgMSA4IDhIMTJhOCA4IDAgMCAxIDgtOCIvPjxwYXRoIGQ9Ik0yMCA4YTggOCAwIDAgMC04LTgiLz48cGF0aCBkPSJNNCAxNmE0IDQgMCAwIDEgNC00aDhhNCA0IDAgMCAxIDQgNHY0SDR2LTRaIi8+PC9zdmc+"
                                                                    alt="Cooking"
                                                                    style={{ width: "16px", height: "16px", marginRight: "4px" }}
                                                                />
                                                            }
                                                            style={{
                                                                backgroundColor: "#e1f5fe",
                                                                color: "#0288d1",
                                                                textTransform: "none",
                                                                fontSize: "12px",
                                                                padding: "4px 10px",
                                                                borderRadius: "4px",
                                                            }}
                                                        >
                                                            Cooking process
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}

export default OrderQueue
