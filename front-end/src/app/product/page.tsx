// src/components/FoodDeliveryApp.tsx
"use client";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
} from "@mui/material";

const categories = ["Breakfast", "Soup", "Main Course", "Dessert"];
const products = [
  {
    name: "Өглөөний хоол",
    price: "24,800₮",
    oldPrice: "26,800₮",
    discount: "20%",
    image: "foode.png",
    description: "A delicious breakfast to start your day with energy.",
  },
  {
    name: "Зайрмаг",
    price: "4,800₮",
    oldPrice: "6,800₮",
    discount: "20%",
    image: "foode.png",
    description: "A refreshing ice cream treat for hot days.",
  },
  {
    name: "Торт",
    price: "54,800₮",
    image: "foode.png",
    description: "A delightful cake, perfect for celebrations.",
  },
  {
    name: "Oreo shake",
    price: "14,800₮",
    image: "foode.png",
    description: "A creamy Oreo shake for dessert lovers.",
  },
  {
    name: "Chocolate",
    price: "14,800₮",
    image: "foode.png",
    description: "Rich and smooth chocolate to satisfy your cravings.",
  },
  {
    name: "Yoghurt",
    price: "14,800₮",
    image: "foode.png",
    description: "Healthy and delicious yoghurt with a creamy texture.",
  },
];

// Modal styling
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const Productlist = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleOpen = (product: any) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: "#cfe8fc", height: "1400px" }} maxWidth="lg">
        <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
          {/* Category Tabs */}
          <div className="flex justify-between gap-4 py-4 bg-white shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border w-[300px] rounded-lg hover:bg-green-500 hover:text-white transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {products.map((product, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: 300,
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                onClick={() => handleOpen(product)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography color="green" fontWeight="bold">
                    {product.price}{" "}
                    {product.oldPrice && (
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                          marginLeft: "8px",
                        }}
                      >
                        {product.oldPrice}
                      </span>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal */}
          <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
              {selectedProduct && (
                <>
                  {/* Product Image */}
                  <Box
                    component="img"
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    sx={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      mb: 2,
                    }}
                  />

                  {/* Product Name */}
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {selectedProduct.name}
                  </Typography>

                  {/* Product Description */}
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedProduct.description}
                  </Typography>

                  {/* Product Price */}
                  <Typography
                    variant="h6"
                    color="green"
                    sx={{ fontWeight: "bold" }}
                  >
                    {selectedProduct.price}
                  </Typography>

                  {/* Old Price (if available) */}
                  {selectedProduct.oldPrice && (
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "gray",
                        mt: 1,
                      }}
                    >
                      {selectedProduct.oldPrice}
                    </Typography>
                  )}

                  {/* Close Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </>
              )}
            </Box>
          </Modal>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Productlist;
