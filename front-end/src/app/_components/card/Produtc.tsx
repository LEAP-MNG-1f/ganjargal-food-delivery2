"use client";

import { GroupedFoodType, Food } from "@/lib/types";

import {
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ALLProduct from "../cards/AllProduct";

export const Product = ({
  groupedFoods,
}: {
  groupedFoods: GroupedFoodType;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<(Food & { quantity: number })[]>(() => {
    // LocalStorage-оос сагсны өгөгдлийг эхний ачаалалд авах
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // LocalStorage-д сагсны өгөгдлийг хадгалах
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Хоолыг сонгож модал нээх
  const handleOpen = (food: Food) => {
    setSelectedFood(food);
    setOpen(true);
  };

  // Модал хаах
  const handleClose = () => {
    setOpen(false);
    setSelectedFood(null);
    setQuantity(1);
  };

  // Тоо ширхэг нэмэх/хасах
  const handleQuantityChange = (value: number) => {
    if (value > 0) setQuantity(value);
  };

  // Сагсанд нэмэх
  const handleAddToCart = () => {
    if (!selectedFood) return;

    const newItem = {
      ...selectedFood,
      quantity,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item._id === selectedFood._id
      );

      let updatedCart;
      if (existingItemIndex !== -1) {
        // Хэрэв бараа сагсанд байгаа бол тоо ширхэгийг нэмэгдүүлнэ
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
      } else {
        // Шинэ барааг сагсанд нэмнэ
        updatedCart = [...prevCart, newItem];
      }

      return updatedCart;
    });

    handleClose();
  };

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "16px",
    p: 3,
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-1"></div>
      </div>

      <div className="flex gap-7">
        {groupedFoods.items.map((food) => (
          <div key={food._id} onClick={() => handleOpen(food)}>
            <ALLProduct food={food} />
          </div>
        ))}
      </div>

      {selectedFood && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h6" className="font-semibold">
                {selectedFood.name || "Хоолны нэр"}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <Box className="flex gap-4">
              {/* Зураг */}
              <Box
                component="img"
                src={selectedFood.image || "https://via.placeholder.com/300"}
                alt={selectedFood.name}
                sx={{
                  width: "50%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              {/* Хоолны мэдээлэл */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {selectedFood.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {selectedFood.ingredient ||
                    "Энэ хоолны талаар мэдээлэл алга."}
                </Typography>
                <Typography
                  variant="h6"
                  color="green"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  {selectedFood.price}₮
                </Typography>
                {/* Тоо ширхэг */}
                <Box className="flex items-center gap-2 mb-4">
                  <Typography variant="body1">Тоо:</Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    -
                  </Button>
                  <TextField
                    value={quantity}
                    size="small"
                    inputProps={{
                      style: { textAlign: "center", width: "50px" },
                    }}
                    disabled
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </Box>
                {/* Захиалах товч */}
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                  onClick={handleAddToCart}
                >
                  Захиалах
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};
