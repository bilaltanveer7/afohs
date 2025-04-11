import React, { useState } from 'react'
import SideNav from '../sidebar/sidenav';
import { useNavigate } from 'react-router-dom';
import PaymentPage from './payment';
import CloseIcon from "@mui/icons-material/Close";
import filtericon from '../assetts/_ButtonBase.png'
import coffeeimg from '../assetts/image.png'
import capuimg from '../assetts/cimage.png'
import bevimg from '../assetts/bgimage.png'
// import "./style.css";
import {
  Box,
  Typography,
  Slide,
  TextField,
  Button,
  Card,
  Modal,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  Paper,
  Badge
} from "@mui/material"
import {
  ArrowBack,
  Search,
  GridView,
  ViewList,
  FilterAlt,
  ContentCopy,
  Edit,
  Cancel,
  ExpandMore,
  ArrowForward,
  Notifications
} from "@mui/icons-material"
import "bootstrap/dist/css/bootstrap.min.css"

const drawerWidthOpen = 240;
const drawerWidthClosed = 110;

const AllOrder = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTab, setSelectedTab] = useState("All Menus")
  const [selectedProduct, setSelectedProduct] = useState("cappucino")
  const [viewMode, setViewMode] = useState("grid")
  const [showMore, setShowMore] = useState(false)

  const tabs = ["All Menus", "Coffee & Beverage", "Food & Snack", "Imaji at Home"]

  const products = [
    {
      id: 1,
      name: "Ristretto Bianco",
      category: "Coffee & Beverage",
      originalPrice: 8.0,
      price: 4.0,
      discount: 50,
      stock: 58,
      image: coffeeimg,
      temperature: ["Ice", "Hot"],
      size: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "Iced creamy latte",
      category: "Coffee & Beverage",
      originalPrice: 8.0,
      price: 5.0,
      discount: 50,
      stock: 0,
      image: capuimg,
      temperature: ["Ice", "Hot"],
      size: ["S", "M", "L"],
    },
    {
      id: 3,
      name: "cappucino",
      category: "Coffee & Beverage",
      originalPrice: 8.0,
      price: 5.0,
      discount: 50,
      stock: 58,
      image: bevimg,
      temperature: ["Ice", "Hot"],
      size: ["S", "M", "L"],
    },
    {
      id: 4,
      name: "Orange juice",
      category: "Coffee & Beverage",
      originalPrice: 5.0,
      price: 5.0,
      discount: 0,
      stock: 58,
      image: coffeeimg,
      temperature: ["Ice", "Hot"],
      size: ["S", "M", "L"],
    },
    {
      id: 5,
      name: "Soda Beverage",
      category: "Coffee & Beverage",
      originalPrice: 5.0,
      price: 5.0,
      discount: 0,
      stock: 58,
      image: bevimg,
      temperature: ["Ice", "Hot"],
      size: ["S", "M", "L"],
    },
    {
      id: 6,
      name: "milk coffee with re...",
      category: "Coffee & Beverage",
      originalPrice: 4.0,
      price: 4.0,
      discount: 0,
      stock: 58,
      image: capuimg,
      temperature: ["Ice", "Hot"],
      size: ["S", "M", "L"],
    },
  ]

  const orderItems = [
    { id: 1, name: "Cappucino", quantity: 2, price: 5.0, total: 10.0 },
    { id: 2, name: "Soda Beverage", quantity: 3, price: 5.0, total: 15.0 },
    { id: 3, name: "Item 3", quantity: 1, price: 5.0, total: 5.0, hidden: true },
    { id: 4, name: "Item 4", quantity: 1, price: 5.0, total: 5.0, hidden: true },
    { id: 5, name: "Item 5", quantity: 1, price: 5.0, total: 5.0, hidden: true },
    { id: 6, name: "Item 6", quantity: 1, price: 5.0, total: 5.0, hidden: true },
  ]

  const visibleItems = showMore ? orderItems : orderItems.filter((item) => !item.hidden)

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }

  const handleProductClick = (productName) => {
    setSelectedProduct(productName)
  }

  const handleTemperatureClick = (productId, temp) => {
    console.log(`Selected ${temp} for product ${productId}`)
  }

  const handleSizeClick = (productId, size) => {
    console.log(`Selected ${size} for product ${productId}`)
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  const renderGridView = () => {
    return (
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                cursor: "pointer",
                height: "100%",
                bgcolor: selectedProduct === product.name ? "#e6f7ff" : "white",
                border: selectedProduct === product.name ? "1px solid #90caf9" : "1px solid #e0e0e0",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              onClick={() => handleProductClick(product.name)}
            >
              <CardContent sx={{ p: 2 }}>
                {/* Product Header */}
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{ width: 50, height: 50, borderRadius: "50%", mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.category}
                    </Typography>
                  </Box>
                </Box>

                {/* Price Section */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mr: 1 }}>
                    Rs {product.price.toFixed(2)}
                  </Typography>
                  {product.discount > 0 && (
                    <>
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: "line-through",
                          color: "text.secondary",
                          mr: 1,
                        }}
                      >
                        Rs {product.originalPrice.toFixed(2)}
                      </Typography>
                      <Chip
                        label={`${product.discount}%`}
                        size="small"
                        sx={{
                          bgcolor: "#1976d2",
                          color: "white",
                          height: "20px",
                          fontSize: "0.7rem",
                        }}
                      />
                    </>
                  )}
                </Box>

                {/* Stock Status */}
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: product.stock > 0 ? "text.secondary" : "#f44336",
                  }}
                >
                  {product.stock > 0 ? `Ready Stock ${product.stock} pcs` : "Out of Stock"}
                </Typography>

                {/* Temperature Options */}
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Temperature
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {product.temperature.map((temp) => (
                      <Button
                        key={temp}
                        variant="outlined"
                        size="small"
                        onClick={() => handleTemperatureClick(product.id, temp)}
                        sx={{
                          minWidth: "40px",
                          borderColor: "#e0e0e0",
                          color: "#4a5568",
                          "&:hover": {
                            borderColor: "#90caf9",
                            bgcolor: "rgba(144, 202, 249, 0.08)",
                          },
                        }}
                      >
                        {temp}
                      </Button>
                    ))}
                  </Box>
                </Box>

                {/* Size Options */}
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Size
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {product.size.map((size) => (
                      <Button
                        key={size}
                        variant="outlined"
                        size="small"
                        onClick={() => handleSizeClick(product.id, size)}
                        sx={{
                          minWidth: "40px",
                          borderColor: "#e0e0e0",
                          color: "#4a5568",
                          "&:hover": {
                            borderColor: "#90caf9",
                            bgcolor: "rgba(144, 202, 249, 0.08)",
                          },
                        }}
                      >
                        {size}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  }

  const renderListView = () => {
    return (
      <List sx={{ bgcolor: "background.paper", borderRadius: "8px" }}>
        {products.map((product, index) => (
          <Box key={product.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                py: 2,
                cursor: "pointer",
                bgcolor: selectedProduct === product.name ? "#e6f7ff" : "white",
              }}
              onClick={() => handleProductClick(product.name)}
            >
              <ListItemAvatar>
                <Avatar src={product.image} alt={product.name} sx={{ width: 50, height: 50 }} />
              </ListItemAvatar>
              <Box sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold", mr: 1 }}>
                      Rs {product.price.toFixed(2)}
                    </Typography>
                    {product.discount > 0 && (
                      <>
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.secondary",
                            mr: 1,
                          }}
                        >
                          Rs {product.originalPrice.toFixed(2)}
                        </Typography>
                        <Chip
                          label={`${product.discount}%`}
                          size="small"
                          sx={{
                            bgcolor: "#1976d2",
                            color: "white",
                            height: "20px",
                            fontSize: "0.7rem",
                          }}
                        />
                      </>
                    )}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: product.stock > 0 ? "text.secondary" : "#f44336",
                    }}
                  >
                    {product.stock > 0 ? `Ready Stock ${product.stock} pcs` : "Out of Stock"}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, minWidth: "180px" }}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Temperature
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      {product.temperature.map((temp) => (
                        <Button
                          key={temp}
                          variant="outlined"
                          size="small"
                          onClick={() => handleTemperatureClick(product.id, temp)}
                          sx={{
                            minWidth: "40px",
                            borderColor: "#e0e0e0",
                            color: "#4a5568",
                            "&:hover": {
                              borderColor: "#90caf9",
                              bgcolor: "rgba(144, 202, 249, 0.08)",
                            },
                          }}
                        >
                          {temp}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Size
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      {product.size.map((size) => (
                        <Button
                          key={size}
                          variant="outlined"
                          size="small"
                          onClick={() => handleSizeClick(product.id, size)}
                          sx={{
                            minWidth: "40px",
                            borderColor: "#e0e0e0",
                            color: "#4a5568",
                            "&:hover": {
                              borderColor: "#90caf9",
                              bgcolor: "rgba(144, 202, 249, 0.08)",
                            },
                          }}
                        >
                          {size}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ListItem>
            {index < products.length - 1 && <Divider component="li" />}
          </Box>
        ))}
      </List>
    )
  }

  const renderOrderDetail = () => {
    return (
      <Box sx={{ height: "100%" }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 500,
              color: "#333",
              ml: 1,
            }}
          >
            Order Detail
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px",
              borderColor: "#0a4b78",
              color: "#0a4b78",
              textTransform: "none",
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              "&:hover": {
                borderColor: "#0a4b78",
                bgcolor: "rgba(10, 75, 120, 0.04)",
              },
            }}
          >
            Order Saved
            <Badge
              badgeContent="3"
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#0a78d1",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.7rem",
                },
              }}
            />
          </Button>

        </Box>

        <Card
          sx={{
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            mb: 2,
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: "flex", mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  mr: 1,
                }}
              >
                Order Id
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                #001
                <IconButton
                  size="small"
                  sx={{
                    p: 0,
                    ml: 0.5,
                    color: "#333",
                    "&:hover": { color: "#0a4b78" },
                  }}
                >
                  <ContentCopy fontSize="small" sx={{ fontSize: "0.9rem" }} />
                </IconButton>
              </Typography>
            </Box>

            {/* Customer Info */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                sx={{
                  bgcolor: "#0a78d1",
                  width: 36,
                  height: 36,
                  mr: 1,
                  fontSize: "0.9rem",
                }}
              >
                T2
              </Avatar>
              <IconButton
                size="small"
                sx={{
                  p: 0.5,
                  mr: 2,
                  color: "#333",
                  bgcolor: "#f5f5f5",
                  "&:hover": { bgcolor: "#e0e0e0" },
                }}
              >
                <Notifications fontSize="small" sx={{ fontSize: "1.1rem" }} />
              </IconButton>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: "0.75rem",
                  }}
                >
                  Customer Name
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    color: "#333",
                  }}
                >
                  Ravi Kamil
                </Typography>
              </Box>
              <IconButton
                size="small"
                sx={{
                  p: 0.5,
                  mr: 0.5,
                  color: "#666",
                  "&:hover": { color: "#333" },
                }}
              >
                <Cancel fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  p: 0.5,
                  color: "#666",
                  "&:hover": { color: "#333" },
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
            </Box>

            {/* Order Items */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#333",
                  mb: 1.5,
                }}
              >
                Order On Going
              </Typography>

              {visibleItems.map(
                (item, index) =>
                  !item.hidden && (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: index === 0 ? "#4caf50" : "#2196f3",
                          mr: 1.5,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          flexGrow: 1,
                          color: "#333",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          mr: 2,
                        }}
                      >
                        {item.quantity} × Rs {item.price.toFixed(2)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: "#333",
                          width: 70,
                          textAlign: "right",
                        }}
                      >
                        Rs {item.total.toFixed(2)}
                      </Typography>
                    </Box>
                  ),
              )}

              <Button
                variant="text"
                onClick={handleShowMore}
                sx={{
                  color: "#0a78d1",
                  textTransform: "none",
                  p: 0,
                  mt: 0.5,
                  fontSize: "0.85rem",
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Show more (4)
              </Button>
            </Box>

            {/* Empty State */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 3,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  bgcolor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1.5,
                }}
              >
                <Box
                  component="img"
                  src="/placeholder.svg?height=40&width=40"
                  alt="Shopping bag"
                  sx={{
                    width: 40,
                    height: 40,
                    filter: "brightness(0.8)",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  textAlign: "center",
                }}
              >
                No products have been selected yet
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Paper
          sx={{
            borderRadius: "10px",
            bgcolor: "#e3f2fd",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              pb: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "#0a4b78",
              }}
            >
              Order Summary
            </Typography>
            <IconButton
              size="small"
              sx={{
                p: 0.5,
                color: "#0a4b78",
              }}
            >
              <ExpandMore fontSize="small" />
            </IconButton>
          </Box>

          <Divider
            sx={{
              borderStyle: "dashed",
              borderColor: "#90caf9",
              mx: 2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              pt: 1.5,
              pb: 1.5,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "#0a4b78",
              }}
            >
              Total Bill
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "#0a4b78",
              }}
            >
              Rs 0
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              p: 2,
              pt: 0,
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mr: 1,
                borderColor: "#0a4b78",
                color: "#0a4b78",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#0a4b78",
                  bgcolor: "rgba(10, 75, 120, 0.04)",
                },
              }}
            >
              Save Order
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setShowPayment(true)}
              sx={{
                bgcolor: "#0a4b78",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#083c61",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
              }}
            >
              <span>Payment</span>
              <ArrowForward fontSize="small" />
            </Button>
            <Modal
              open={showPayment}
              onClose={() => setShowPayment(false)}
              aria-labelledby="payment-modal-title"
              aria-describedby="payment-modal-description"
              closeAfterTransition
              sx={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Slide direction="left" in={showPayment} mountOnEnter unmountOnExit>
                <Box
                  sx={{
                    position: 'fixed',
                    top: '10px',
                    bottom: '10px',
                    right: 10,
                    width: { xs: '100%', sm: 900 },
                    bgcolor: '#fff',
                    boxShadow: 4,
                    zIndex: 1300,
                    overflowY: 'auto',
                    borderRadius: 1,
                    scrollbarWidth: 'none', // Firefox
                    '&::-webkit-scrollbar': {
                      display: 'none', // Chrome, Safari, Edge
                    },
                  }}
                >
                  {/* Your PaymentPage component inside the modal */}
                  <PaymentPage />
                </Box>
              </Slide>
            </Modal>
          </Box>
        </Paper>
      </Box>
    )
  }
  return (
    <>
      <SideNav open={open} setOpen={setOpen} />
      <div style={{
        marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
        transition: "margin-left 0.3s ease-in-out",
        marginTop: '5rem',
        // bgcolor: '#f5f7fa'
      }}>
        <Box sx={{ maxWidth: "100%", bgcolor: "#f5f7f9", minHeight: "100vh", p: 2 }}>
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <IconButton sx={{ color: "#4a5568" }}
              onClick={() => navigate('/order/queue')}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h4" component="h1" sx={{ ml: 1, color: "#3F4E4F", fontSize: '46px', fontWeight: 500 }}>
              All Order
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>

            <Box sx={{ flex: "1 1 80%" }}>

              <Box sx={{ display: "flex", overflowX: "auto", mb: 1, py: 3, height: '80px', pl: 2, borderRadius: '10px', bgcolor: '#F0F0F0' }}>
                {tabs.map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    sx={{
                      mr: 1,
                      borderRadius: "20px",
                      px: 2,
                      py: 1,
                      textTransform: "none",
                      color: selectedTab === tab ? "#FFFFFF" : "#063455",
                      bgcolor: selectedTab === tab ? "#063455" : "transparent",
                      border: selectedTab === tab ? "none" : "1px solid #063455",
                      // "&:hover": {
                      //   bgcolor: selectedTab === tab ? "none" : "#063455",
                      // },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tab}
                  </Button>
                ))}
              </Box>
              <Box sx={{
                bgcolor: '#FFFFFF',
                width: '100%',
                p: 2,
                borderRadius: '8px'
              }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: "500", fontSize: '36px', color: "#000000" }}>
                      67
                    </Typography>
                    <Typography variant="body1" sx={{ ml: 1, mt: -1, color: "#7F7F7F", fontSize: '16px', }}>
                      Products
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      placeholder="Search"
                      variant="outlined"
                      size="small"
                      sx={{
                        mr: 2,
                        width: "250px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "4px",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search sx={{ color: "#718096" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box sx={{ display: "flex", bgcolor: "white", borderRadius: "4px", mr: 1 }}>
                      <IconButton
                        sx={{
                          color: viewMode === "grid" ? "white" : "#4a5568",
                          bgcolor: viewMode === "grid" ? "#4a5568" : "transparent",
                          borderRadius: "4px 0 0 4px",
                          "&:hover": { bgcolor: viewMode === "grid" ? "#3a4458" : "#f0f0f0" },
                        }}
                        onClick={() => setViewMode("grid")}
                      >
                        <GridView />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: viewMode === "list" ? "white" : "#4a5568",
                          bgcolor: viewMode === "list" ? "#4a5568" : "transparent",
                          borderRadius: "0 4px 4px 0",
                          "&:hover": { bgcolor: viewMode === "list" ? "#3a4458" : "#f0f0f0" },
                        }}
                        onClick={() => setViewMode("list")}
                      >
                        <ViewList />
                      </IconButton>
                    </Box>
                    <img src={filtericon} alt='' style={{
                      height: 44,
                      width: 44,
                      cursor: 'pointer'
                    }} />
                  </Box>
                </Box>


                {viewMode === "grid" ? renderGridView() : renderListView()}
              </Box>
            </Box>
            <Box sx={{ flex: "1 1 30%" }}>
              {renderOrderDetail()}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default AllOrder
