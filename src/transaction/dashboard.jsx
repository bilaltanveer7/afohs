"use client"

import { useState } from "react"
import SideNav from '../sidebar/sidenav'
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
  Card,
  CardContent,
  Chip,
  Avatar,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material"
import {
  Search as SearchIcon,
  FilterAlt as FilterIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  LocalDining as DiningIcon,
  TwoWheeler as DeliveryIcon, // Replaced Motorcycle with TwoWheeler
  TakeoutDining as TakeoutIcon,
  EventSeat as ReservationIcon,
  CheckCircle as CheckCircleIcon,
  Receipt as ReceiptIcon,
  Print as PrintIcon,
  Circle as CircleIcon,
  Person as PersonIcon,
  Star as StarIcon,
  Diamond as DiamondIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material"
import "bootstrap/dist/css/bootstrap.min.css"
import RoomServiceIcon from "@mui/icons-material/RoomService"
// Custom CSS
const styles = {
  root: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  tabButton: {
    borderRadius: "20px",
    margin: "0 5px",
    textTransform: "none",
    fontWeight: "normal",
    padding: "6px 16px",
    border: "1px solid #00274D",
    color: "#00274D",
  },
  activeTabButton: {
    backgroundColor: "#0a3d62",
    color: "white",
    borderRadius: "20px",
    margin: "0 5px",
    textTransform: "none",
    fontWeight: "normal",
    padding: "6px 16px",
  },
  revenueCard: {
    backgroundColor: "#0a3d62",
    color: "white",
    borderRadius: "8px",
    padding: "15px",
  },
  transactionCard: {
    backgroundColor: "#1e4258",
    color: "white",
    borderRadius: "8px",
    padding: "15px",
  },
  orderCard: {
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  tableAvatar: {
    backgroundColor: "#0a3d62",
    color: "white",
    width: "36px",
    height: "36px",
    fontSize: "14px",
  },
  deliveryAvatar: {
    backgroundColor: "#3498db",
    color: "white",
    width: "36px",
    height: "36px",
    fontSize: "14px",
  },
  pickupAvatar: {
    backgroundColor: "#27ae60",
    color: "white",
    width: "36px",
    height: "36px",
    fontSize: "14px",
  },
  statusChip: {
    borderRadius: "4px",
    height: "24px",
    fontSize: "12px",
  },
  filterButton: {
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #ddd",
    boxShadow: "none",
    textTransform: "none",
  },
  filterChip: {
    backgroundColor: "#e3f2fd",
    color: "#0a3d62",
    margin: "0 4px",
    borderRadius: "16px",
  },
  activeFilterChip: {
    backgroundColor: "#0a3d62",
    color: "white",
    margin: "0 4px",
    borderRadius: "16px",
  },
  modalTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    borderBottom: "1px solid #eee",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 24px",
    borderTop: "1px solid #eee",
  },
  applyButton: {
    backgroundColor: "#0a3d62",
    color: "white",
    textTransform: "none",
  },
  resetButton: {
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #ddd",
    marginRight: "8px",
    textTransform: "none",
  },
  cancelButton: {
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #ddd",
    textTransform: "none",
  },
  orderDetailHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  orderDetailAvatar: {
    backgroundColor: "#0a3d62",
    color: "white",
    width: "40px",
    height: "40px",
  },
  orderItemImage: {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  trackOrderStep: {
    display: "flex",
    marginBottom: "16px",
  },
  trackOrderStepIcon: {
    color: "#0a3d62",
    marginRight: "16px",
  },
  trackOrderStepContent: {
    flex: 1,
  },
  trackOrderStepTitle: {
    fontWeight: "bold",
    marginBottom: "4px",
  },
  trackOrderStepTime: {
    color: "#666",
    fontSize: "12px",
  },
  printReceiptButton: {
    backgroundColor: "#0a3d62",
    color: "white",
    textTransform: "none",
  },
  shareReceiptButton: {
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #ddd",
    textTransform: "none",
  },
  closeButton: {
    color: "#333",
  },
  orderIdChip: {
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    padding: "4px 8px",
    fontSize: "14px",
  },
  orderInfoGrid: {
    marginBottom: "16px",
  },
  orderInfoLabel: {
    color: "#666",
    fontSize: "14px",
  },
  orderInfoValue: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  orderItemVariant: {
    color: "#666",
    fontSize: "12px",
    marginTop: "4px",
  },
  orderItemPrice: {
    textAlign: "right",
    fontWeight: "bold",
  },
  orderItemQuantity: {
    color: "#666",
    fontSize: "14px",
    textAlign: "right",
  },
  orderSummaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  orderTotal: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  paymentInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    marginBottom: "16px",
  },
  paymentMethod: {
    display: "flex",
    alignItems: "center",
  },
  paymentIcon: {
    marginRight: "8px",
    color: "#0a3d62",
  },
  trackOrderImage: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
    marginTop: "8px",
  },
  productSoldCard: {
    backgroundColor: "#1e4258",
    color: "white",
    borderRadius: "8px",
    padding: "15px",
    height: "100%",
  },
  totalOrderCard: {
    backgroundColor: "#1e4258",
    color: "white",
    borderRadius: "8px",
    padding: "15px",
    height: "100%",
  },
}

// Sample data
const orders = [
  {
    id: 1,
    customer: "Qafi Latif",
    tableNumber: "T2",
    items: 4,
    status: "Ready to serve",
    statusCode: "ready",
    amount: 47.0,
    orderNumber: "001",
    isVIP: true,
    type: "dine-in",
  },
  {
    id: 2,
    customer: "Hamid Indra",
    tableNumber: "T3",
    items: 4,
    status: "Order Done",
    statusCode: "done",
    amount: 47.0,
    orderNumber: "001",
    isVIP: false,
    type: "dine-in",
  },
  {
    id: 3,
    customer: "Miles Esther",
    tableNumber: "T4",
    items: 4,
    status: "Order Done",
    statusCode: "done",
    amount: 47.0,
    orderNumber: "001",
    isVIP: false,
    type: "dine-in",
  },
  {
    id: 4,
    customer: "Miles Esther",
    tableNumber: "DE",
    items: 4,
    status: "Order Cancelled",
    statusCode: "cancelled",
    amount: 10.0,
    orderNumber: "001",
    isVIP: false,
    type: "delivery",
  },
]

const orderDetail = {
  id: "#123",
  customer: "Qafi Latif",
  tableNumber: "T14",
  date: "12. Jan 2024",
  cashier: "Tynisha Obey",
  cashierAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
  workingTime: "15.00 - 22.00 PM",
  isVIP: true,
  items: [
    {
      name: "Cappucino",
      category: "Coffee & Beverage",
      variant: "Ice, Large, Normal sugar",
      quantity: 1,
      price: 5.0,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Buttermilk Waffle",
      category: "Food & Snack",
      variant: "Choco",
      quantity: 2,
      price: 5.0,
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "At Home Classic",
      category: "Imaji at Home",
      variant: "250 gr",
      quantity: 1,
      price: 4.0,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ],
  subtotal: 19.0,
  discount: 0,
  tax: 2.28,
  total: 16.72,
  payment: {
    method: "Cash",
    amount: 20.0,
    change: 3.28,
  },
}

const trackingSteps = [
  {
    title: "Successfully Delivered",
    time: "Thursday, 4 April 2024, 08:17 AM",
    completed: true,
    hasProof: true,
    proofImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O8EAr4Sr4VdJp28I2jkRandb7W6KeU.png",
    proofText: "Photo Proof of Delivery",
    proofAddedBy: "Added at 12:23 PM by Jhon Andi (Courier)",
  },
  {
    title: "Processed at Delivered Center",
    time: "Thursday, 4 April 2024, 03:07 AM",
    completed: true,
  },
  {
    title: "Arrived at Sorting Center",
    time: "Monday, 4 April 2024, 22:45 PM",
    completed: true,
  },
  {
    title: "Shipment En Route",
    time: "Monday, 4 April 2024, 22:24 PM",
    completed: true,
  },
  {
    title: "Arrived At Sorting Center",
    time: "Monday, 4 April 2024, 15:13 PM",
    completed: true,
  },
  {
    title: "Shipment En Route",
    time: "Monday, 3 April 2024, 12:14 PM",
    completed: true,
  },
]

const drawerWidthOpen = 240;
const drawerWidthClosed = 110;

const TransactionDashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openOrderDetailModal, setOpenOrderDetailModal] = useState(false);
  const [openTrackOrderModal, setOpenTrackOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filters, setFilters] = useState({
    sort: "asc",
    orderType: "all",
    memberStatus: "all",
    orderStatus: "all",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleOpenFilterModal = () => {
    setOpenFilterModal(true)
  }

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false)
  }

  const handleOpenOrderDetail = (order) => {
    setSelectedOrder(order)
    setOpenOrderDetailModal(true)
  }

  const handleCloseOrderDetail = () => {
    setOpenOrderDetailModal(false)
  }

  const handleOpenTrackOrder = () => {
    setOpenTrackOrderModal(true)
    setOpenOrderDetailModal(false)
  }

  const handleCloseTrackOrder = () => {
    setOpenTrackOrderModal(false)
  }

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleResetFilters = () => {
    setFilters({
      sort: "asc",
      orderType: "all",
      memberStatus: "all",
      orderStatus: "all",
    })
  }

  const handleApplyFilters = () => {
    setOpenFilterModal(false)
    // Here you would typically apply the filters to your data
    console.log("Applied filters:", filters)
  }

  const getStatusChipColor = (status) => {
    switch (status) {
      case "ready":
        return "#e3f2fd"
      case "done":
        return "#e8f5e9"
      case "cancelled":
        return "#ffebee"
      default:
        return "#e0e0e0"
    }
  }

  const getStatusChipTextColor = (status) => {
    switch (status) {
      case "ready":
        return "#0288d1"
      case "done":
        return "#388e3c"
      case "cancelled":
        return "#d32f2f"
      default:
        return "#616161"
    }
  }

  const getAvatarStyle = (type) => {
    switch (type) {
      case "delivery":
        return styles.deliveryAvatar
      case "pickup":
        return styles.pickupAvatar
      default:
        return styles.tableAvatar
    }
  }

  return (
    <>
      <SideNav open={open} setOpen={setOpen} />
      <div style={{
        marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
        transition: "margin-left 0.3s ease-in-out",
        marginTop: '4rem',
      }}>
        <div style={styles.root}>
          <Box p={2}>
            {/* Tab Navigation */}
            <Box
              display="flex"
              mb={2}
              overflow="auto"
              pb={1}
              style={{
                background: "#f0f0f0",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Button
                style={activeTab === "all" ? styles.activeTabButton : styles.tabButton}
                onClick={() => handleTabChange("all")}
              >
                All transactions
              </Button>
              <Button
                style={activeTab === "dine-in" ? styles.activeTabButton : styles.tabButton}
                onClick={() => handleTabChange("dine-in")}
              >
                Dine In
              </Button>
              <Button
                style={activeTab === "pickup" ? styles.activeTabButton : styles.tabButton}
                onClick={() => handleTabChange("pickup")}
              >
                Pick Up
              </Button>
              <Button
                style={activeTab === "delivery" ? styles.activeTabButton : styles.tabButton}
                onClick={() => handleTabChange("delivery")}
              >
                Delivery
              </Button>
              <Button
                style={activeTab === "takeaway" ? styles.activeTabButton : styles.tabButton}
                onClick={() => handleTabChange("takeaway")}
              >
                Takeaway
              </Button>
              <Button
                style={activeTab === "reservation" ? styles.activeTabButton : styles.tabButton}
                onClick={() => handleTabChange("reservation")}
              >
                Reservation
              </Button>
            </Box>
            <Box
              p={2}
              style={{
                background: "#fbfbfb",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              {/* Header */}
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4" fontWeight="bold" sx={{
                  fontWeight: 500,
                  fontSize: "36px",
                }}>
                  240{" "}
                  <span style={{ fontSize: "16px", fontWeight: "400", color: "#7F7F7F" }}>Transactions in your Shift</span>
                </Typography>
                <Box display="flex" gap={1}>
                  <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    sx={{ width: "300px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    startIcon={<FilterIcon />}
                    style={styles.filterButton}
                    onClick={handleOpenFilterModal}
                  >
                    Filter
                  </Button>
                </Box>
              </Box>

              {/* Main Content */}
              <Grid container spacing={2}>
                {/* Left Column */}
                <Grid item xs={12} md={6}>
                  <Box>
                    {/* Revenue Card */}
                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.7)"
                      style={{
                        background: "#446780",
                        padding: "10px",
                      }}
                    >
                      Ensure the total revenue from your shift's orders is accurate for reporting.
                    </Typography>
                    <Box style={{ ...styles.revenueCard, borderRadius: 0 }} mb={2}>
                      <Typography
                        variant="body2"
                        color="#ffff"
                        mb={1}
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                        }}>
                        Today Revenue
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" mb={2}
                        sx={{
                          fontWeight: 500,
                          fontSize: "30px",
                        }}>
                        Rs 559,102.00
                      </Typography>
                      <Box display="flex" justifyContent="space-between">
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{
                            fontWeight: 500,
                            fontSize: "12px",
                          }}>
                            40%
                          </Typography>
                          <Typography variant="body2" color="#ffff"
                            sx={{
                              fontWeight: 400,
                              fontSize: "12px",
                            }}>
                            Dine In
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{
                            fontWeight: 500,
                            fontSize: "12px",
                          }}>
                            15%
                          </Typography>
                          <Typography variant="body2" color="#ffff" sx={{
                            fontWeight: 400,
                            fontSize: "12px",
                          }}>
                            Takeaway
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{
                            fontWeight: 500,
                            fontSize: "12px",
                          }}>
                            35%
                          </Typography>
                          <Typography variant="body2" color="#ffff" sx={{
                            fontWeight: 400,
                            fontSize: "12px",
                          }}>
                            Delivery
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{
                            fontWeight: 500,
                            fontSize: "12px",
                          }}>
                            10%
                          </Typography>
                          <Typography variant="body2" color="#ffff" sx={{
                            fontWeight: 400,
                            fontSize: "12px",
                          }}>
                            Pick Up
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Transactions Card */}
                  <Box style={{ ...styles.transactionCard, borderRadius: 0, backgroundColor: "#3f4e4f", }} mb={2}>
                    <Box display="flex" alignItems="center" mb={2} borderBottom="1px solid #566364" py={1}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50%"
                        width={40}
                        height={40}
                        mr={2}

                      >
                        <ReceiptIcon />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="#C6C6C6" sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                        }}>
                          Total Transactions
                        </Typography>
                        <Typography variant="h5" color="#ffff" fontWeight="bold" sx={{
                          fontWeight: 500,
                          fontSize: "20px",
                        }}>
                          320
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" gap="150px">
                      <Box>
                        <Typography variant="body2" color="#C6C6C6" sx={{
                          fontWeight: 400,
                          fontSize: "12px",
                        }}>
                          Self Order
                        </Typography>
                        <Typography variant="h6" color="#ffff" fontWeight="bold" sx={{
                          fontWeight: 500,
                          fontSize: "18px",
                        }}>
                          280
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="#C6C6C6" sx={{
                          fontWeight: 400,
                          fontSize: "12px",
                        }}>
                          Mobile App
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" sx={{
                          fontWeight: 500,
                          fontSize: "18px",
                        }}>
                          40
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Product Sold and Total Order Cards */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box style={{ ...styles.productSoldCard, borderRadius: 0, backgroundColor: "#3f4e4f", }}>
                        <Box display="flex" alignItems="center" mb={2}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="rgba(255,255,255,0.1)"
                            borderRadius="50%"
                            width={40}
                            height={40}
                            mr={2}
                          >
                            <DiningIcon />
                          </Box>
                          <Box>
                            <Typography variant="body2" color="#C6C6C6" sx={{
                              fontWeight: 400,
                              fontSize: "14px",
                            }}>
                              Product Sold
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{
                              fontWeight: 500,
                              fontSize: "20px",
                            }}>
                              500 <span style={{ fontSize: "12px", fontWeight: "normal" }}>Items</span>
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box style={{ ...styles.totalOrderCard, borderRadius: 0, backgroundColor: "#3f4e4f", }}>
                        <Box display="flex" alignItems="center" mb={2}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="rgba(255,255,255,0.1)"
                            borderRadius="50%"
                            width={40}
                            height={40}
                            mr={2}
                          >
                            <ReceiptIcon />
                          </Box>
                          <Box>
                            <Typography variant="body2" color="#C6C6C6" sx={{
                              fontWeight: 400,
                              fontSize: "14px",
                            }}>
                              Total Order
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{
                              fontWeight: 500,
                              fontSize: "20px",
                            }}>
                              380 <span style={{ fontSize: "12px", fontWeight: "normal" }}>Order</span>
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Right Column - Orders List */}
                <Grid item xs={12} md={6}>
                  {orders.map((order) => (
                    <Card
                      style={{
                        ...styles.orderCard,
                        borderRadius: 0,
                        boxShadow: "none",
                        border: "1px solid #E3E3E3",
                      }}
                      key={order.id}
                      onClick={() => handleOpenOrderDetail(order)}
                    >
                      <CardContent>
                        <Box display="flex" alignItems="center">
                          <Avatar style={getAvatarStyle(order.type)}>{order.tableNumber}</Avatar>

                          {/* Waiter Icon */}
                          <Avatar
                            style={{
                              marginLeft: 8,
                              backgroundColor: "#E3E3E3",
                              width: 32,
                              height: 32,
                            }}
                          >
                            <RoomServiceIcon style={{ color: "#000", fontSize: 20 }} />
                          </Avatar>
                          <Box ml={2} flex={1}>
                            <Box display="flex" alignItems="center">
                              <Typography variant="subtitle1" sx={{
                                fontWeight: 500,
                                fontSize: "18px",
                              }}>
                                {order.customer}
                              </Typography>
                              {order.isVIP && (
                                <Box
                                  component="span"
                                  ml={1}
                                  display="inline-block"
                                  width={16}
                                  height={16}
                                  borderRadius="50%"
                                  bgcolor="#ffc107"
                                />
                              )}
                            </Box>
                            <Typography variant="body2" color="#7F7F7F" sx={{
                              fontWeight: 400,
                              fontSize: "14px",
                            }}>
                              {order.items} Items
                            </Typography>
                          </Box>
                          <Box textAlign="right">
                            <Typography variant="subtitle1" fontWeight="bold" display="flex" gap="5px" alignItems="center" sx={{
                              fontWeight: 500,
                              fontSize: "20px",
                            }}>
                              <Typography color="#7F7F7F" sx={{
                                fontWeight: 400,
                                fontSize: "16px",
                              }}>Rs </Typography>
                              {order.amount.toFixed(2)}
                            </Typography>
                          </Box>
                        </Box>
                        <Box display="flex" alignItems="center" mt={1}>
                          <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                            #{order.orderNumber}
                          </Typography>
                          <Chip
                            label={order.status}
                            size="small"
                            style={{
                              ...styles.statusChip,
                              backgroundColor: getStatusChipColor(order.statusCode),
                              color: getStatusChipTextColor(order.statusCode),
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Filter Modal */}
          <Dialog
            open={openFilterModal}
            onClose={handleCloseFilterModal}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              style: {
                position: "fixed",
                position: "fixed",
                top: 0,
                right: 0,
                margin: 0,
                height: "auto",
                maxHeight: "100vh",
                overflow: "auto",
              },
            }}
          >
            <Box style={styles.modalTitle}>
              <Typography variant="h6" fontWeight="bold">
                Menu Filter
              </Typography>
              <IconButton onClick={handleCloseFilterModal} style={styles.closeButton}>
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent>
              {/* Sorting Section */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Sorting
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="body2">By Order Id</Typography>
                  <Button
                    variant={filters.sort === "asc" ? "contained" : "outlined"}
                    onClick={() => handleFilterChange("sort", "asc")}
                    style={filters.sort === "asc" ? styles.activeFilterChip : styles.filterChip}
                  >
                    Ascending
                  </Button>
                  <Button
                    variant={filters.sort === "desc" ? "contained" : "outlined"}
                    onClick={() => handleFilterChange("sort", "desc")}
                    style={filters.sort === "desc" ? styles.activeFilterChip : styles.filterChip}
                  >
                    Descending
                  </Button>
                </Box>
              </Box>

              {/* Order Type Section */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Order Type
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip
                    label="ALL STATUS"
                    onClick={() => handleFilterChange("orderType", "all")}
                    style={filters.orderType === "all" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Dine In"
                    icon={<DiningIcon />}
                    onClick={() => handleFilterChange("orderType", "dine-in")}
                    style={filters.orderType === "dine-in" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Pick Up"
                    icon={<TakeoutIcon />}
                    onClick={() => handleFilterChange("orderType", "pickup")}
                    style={filters.orderType === "pickup" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Delivery"
                    icon={<DeliveryIcon />}
                    onClick={() => handleFilterChange("orderType", "delivery")}
                    style={filters.orderType === "delivery" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Takeaway"
                    icon={<TakeoutIcon />}
                    onClick={() => handleFilterChange("orderType", "takeaway")}
                    style={filters.orderType === "takeaway" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Reservation"
                    icon={<ReservationIcon />}
                    onClick={() => handleFilterChange("orderType", "reservation")}
                    style={filters.orderType === "reservation" ? styles.activeFilterChip : styles.filterChip}
                  />
                </Box>
              </Box>

              {/* Member Status Section */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Member Status
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip
                    label="ALL STATUS"
                    onClick={() => handleFilterChange("memberStatus", "all")}
                    style={filters.memberStatus === "all" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Guest"
                    icon={<PersonIcon />}
                    onClick={() => handleFilterChange("memberStatus", "guest")}
                    style={filters.memberStatus === "guest" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Star"
                    icon={<StarIcon />}
                    onClick={() => handleFilterChange("memberStatus", "star")}
                    style={filters.memberStatus === "star" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Diamond"
                    icon={<DiamondIcon />}
                    onClick={() => handleFilterChange("memberStatus", "diamond")}
                    style={filters.memberStatus === "diamond" ? styles.activeFilterChip : styles.filterChip}
                  />
                </Box>
              </Box>

              {/* Order Status Section */}
              <Box mb={2}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Order Status
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip
                    label="ALL STATUS"
                    onClick={() => handleFilterChange("orderStatus", "all")}
                    style={filters.orderStatus === "all" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Ready to serve"
                    icon={<CheckCircleIcon />}
                    onClick={() => handleFilterChange("orderStatus", "ready")}
                    style={filters.orderStatus === "ready" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Cooking Process"
                    icon={<RestaurantIcon />}
                    onClick={() => handleFilterChange("orderStatus", "cooking")}
                    style={filters.orderStatus === "cooking" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Waiting to payment"
                    icon={<ReceiptIcon />}
                    onClick={() => handleFilterChange("orderStatus", "waiting")}
                    style={filters.orderStatus === "waiting" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Order done"
                    icon={<CheckCircleIcon />}
                    onClick={() => handleFilterChange("orderStatus", "done")}
                    style={filters.orderStatus === "done" ? styles.activeFilterChip : styles.filterChip}
                  />
                  <Chip
                    label="Order Cancelled"
                    icon={<CloseIcon />}
                    onClick={() => handleFilterChange("orderStatus", "cancelled")}
                    style={filters.orderStatus === "cancelled" ? styles.activeFilterChip : styles.filterChip}
                  />
                </Box>
              </Box>
            </DialogContent>
            <Box style={{
              ...styles.modalFooter,
              gap: "5px",
            }}>
              <Button variant="outlined" style={styles.cancelButton} onClick={handleCloseFilterModal}>
                Cancel
              </Button>
              <Button variant="outlined" style={styles.resetButton} onClick={handleResetFilters}>
                Reset Filter
              </Button>
              <Button variant="contained" style={styles.applyButton} onClick={handleApplyFilters}>
                Apply Filters
              </Button>
            </Box>
          </Dialog>

          {/* Order Detail Modal */}
          <Dialog
            open={openOrderDetailModal}
            onClose={handleCloseOrderDetail}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              style: {
                position: "fixed",
                position: "fixed",
                top: 0,
                right: 0,
                margin: 0,
                height: "auto",
                maxHeight: "100vh",
                overflow: "auto",
              },
            }}
          >
            <Box style={styles.modalTitle}>
              <Typography variant="h6" fontWeight="bold">
                Order Detail
              </Typography>
              <IconButton onClick={handleCloseOrderDetail} style={styles.closeButton}>
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent>
              <Box sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 2, mb: 2 }}>
                {/* Header */}
                <Typography variant="caption" color="textSecondary">
                  Customer Name
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  {/* Customer Info */}
                  <Box display="flex" alignItems="center" flex={1}>
                    <Avatar src={orderDetail.customerAvatar} sx={{ width: 36, height: 36, mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold" display="flex" alignItems="center">
                        {orderDetail.customer}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Table Number */}
                  <Avatar sx={{ bgcolor: "#1565c0", color: "#fff", width: 36, height: 36 }}>
                    {orderDetail.tableNumber}
                  </Avatar>

                  {/* Icons */}
                  <Box ml={1} display="flex" gap={1}>
                    <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
                      <HomeIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ border: "1px solid #e0e0e0" }}>
                      <RoomServiceIcon />
                    </IconButton>
                  </Box>
                </Box>

                {/* Grid Info */}
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={4} sx={{ borderRight: "1px solid #e0e0e0" }}>
                    <Typography variant="body2" color="textSecondary">
                      Order Date
                    </Typography>
                    <Typography variant="body1">{orderDetail.date}</Typography>
                  </Grid>

                  <Grid item xs={4} sx={{ borderRight: "1px solid #e0e0e0" }}>
                    <Typography variant="body2" color="textSecondary">
                      Cashier
                    </Typography>
                    <Box display="flex">
                      <Avatar src={orderDetail.cashierAvatar} sx={{ width: 24, height: 24, mr: 1 }} />
                      <Typography variant="body1">{orderDetail.cashier}</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={4} sx={{}}>
                    <Typography variant="body2" color="textSecondary">
                      Working Time
                    </Typography>
                    <Typography variant="body1">{orderDetail.workingTime}</Typography>
                  </Grid>
                </Grid>

                {/* Order ID */}
                <Box mt={2}>
                  <Chip
                    label={`Order Id : ${orderDetail.id}`}
                    sx={{
                      backgroundColor: "#f5f5f5",
                      fontWeight: 500,
                      fontSize: 14,
                      color: "#333",
                    }}
                  />
                </Box>
              </Box>

              {/* Order Items */}
              {orderDetail.items.map((item, index) => (
                <Box key={index} display="flex" mb={2}>
                  <img src={item.image || "/placeholder.svg"} alt={item.name} style={styles.orderItemImage} />
                  <Box ml={2} flex={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.category}
                    </Typography>
                    <Typography variant="body2" style={styles.orderItemVariant}>
                      Variant : {item.variant}
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography variant="body2" style={styles.orderItemQuantity}>
                      Qty : {item.quantity} x Rs {item.price.toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle1" style={styles.orderItemPrice}>
                      Rs {(item.quantity * item.price).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* Order Summary */}
              <Box mt={3}>
                <Box style={styles.orderSummaryRow}>
                  <Typography variant="body1">Subtotal</Typography>
                  <Typography variant="body1">Rs {orderDetail.subtotal.toFixed(2)}</Typography>
                </Box>
                <Box style={styles.orderSummaryRow}>
                  <Typography variant="body1">Discount</Typography>
                  <Typography variant="body1">Rs {orderDetail.discount}% (0)</Typography>
                </Box>
                <Box style={styles.orderSummaryRow}>
                  <Typography variant="body1">Tax 12%</Typography>
                  <Typography variant="body1">Rs {orderDetail.tax.toFixed(2)}</Typography>
                </Box>
                <Box style={styles.orderSummaryRow}>
                  <Typography variant="subtitle1" style={styles.orderTotal}>
                    Total
                  </Typography>
                  <Typography variant="subtitle1" style={styles.orderTotal}>
                    Rs {orderDetail.total.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              {/* Payment Info */}
              <Box style={styles.paymentInfo}>
                <Box style={styles.paymentMethod}>
                  <ReceiptIcon style={styles.paymentIcon} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Payment
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {orderDetail.payment.method}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Cash Total
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Rs {orderDetail.payment.amount.toFixed(2)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Customer Change
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Rs {orderDetail.payment.change.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Button variant="contained" fullWidth style={styles.applyButton} onClick={handleOpenTrackOrder}>
                Track Order
              </Button>
            </DialogContent>
            <Box style={styles.modalFooter}>
              <Button variant="contained" style={styles.cancelButton} onClick={handleCloseOrderDetail}>
                Close
              </Button>
              <Box ml={1}>
                <Button variant="contained" style={styles.shareReceiptButton} endIcon={<ArrowDropDownIcon />}>
                  Share Receipt
                </Button>
              </Box>
              <Box ml={1}>
                <Button variant="contained" style={styles.printReceiptButton} startIcon={<PrintIcon />}>
                  Print Receipt
                </Button>
              </Box>
            </Box>
          </Dialog>

          {/* Track Order Modal */}
          <Dialog
            open={openTrackOrderModal}
            onClose={handleCloseTrackOrder}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              style: {
                position: "fixed",
                position: "fixed",
                top: 0,
                right: 0,
                margin: 0,
                height: "auto",
                maxHeight: "100vh",
                overflow: "auto",
              },
            }}
          >
            <Box style={styles.modalTitle}>
              <Typography variant="h6" fontWeight="bold">
                Track Order
              </Typography>
              <IconButton onClick={handleCloseTrackOrder} style={styles.closeButton}>
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent>
              {trackingSteps.map((step, index) => (
                <Box key={index} style={styles.trackOrderStep}>
                  {step.completed ? (
                    <CheckCircleIcon style={styles.trackOrderStepIcon} />
                  ) : (
                    <CircleIcon style={styles.trackOrderStepIcon} />
                  )}
                  <Box style={styles.trackOrderStepContent}>
                    <Typography variant="body1" style={styles.trackOrderStepTitle}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" style={styles.trackOrderStepTime}>
                      {step.time}
                    </Typography>
                    {step.hasProof && (
                      <Box mt={1}>
                        <Typography variant="body2" fontWeight="bold">
                          {step.proofText}
                        </Typography>
                        <Typography variant="body2" style={styles.trackOrderStepTime}>
                          {step.proofAddedBy}
                        </Typography>
                        <img
                          src={step.proofImage || "/placeholder.svg"}
                          alt="Delivery Proof"
                          style={styles.trackOrderImage}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              ))}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default TransactionDashboard
