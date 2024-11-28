"use client";
import {
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Food = {
  id?: number;
  imageSrc?: string;
  title?: string;
  price?: string;
  description?: string;
  quantity: number;
};

type CardProps = {
  id?: number;
  imageSrc?: string;
  title?: string;
  price?: string;
  description?: string;
};

export const FoodCard = ({
  id,
  imageSrc,
  title,
  price,
  description,
}: CardProps) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<Food[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQuantityChange = (value: number) => {
    if (value > 0) setQuantity(value);
  };

  const handleAddToCart = () => {
    const newItem: Food = {
      id,
      imageSrc,
      title,
      price,
      description,
      quantity,
    };

    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, newItem];
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
    <div className="w-[270px] h-[340px] flex flex-col rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      {/* Карт хэсэг */}
      <div onClick={handleOpen}>
        <div className="h-[180px] overflow-hidden rounded-t-xl">
          <img
            src={imageSrc || "https://via.placeholder.com/300"}
            alt={title || "Food Image"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <Typography variant="h6" className="font-semibold">
            {title || "Хоолны нэр"}
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-600 truncate"
            title={description || ""}
          >
            {description || "Энэ хоолны дэлгэрэнгүй мэдээлэл алга."}
          </Typography>
          <div className="flex justify-between items-center mt-2">
            <Typography variant="body1" className="text-green-600 font-bold">
              {price || "0₮"}
            </Typography>
          </div>
        </div>
      </div>

      {/* Modal хэсэг */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="font-semibold">
              {title || "Хоолны нэр"}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <Box className="flex gap-4">
            {/* Зураг */}
            <Box
              component="img"
              src={imageSrc || "https://via.placeholder.com/300"}
              alt={title}
              sx={{
                width: "50%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            {/* Мэдээлэл */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                {title || "Хоолны нэр"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {description || "Энэ хоолны талаар мэдээлэл алга."}
              </Typography>
              <Typography
                variant="h6"
                color="green"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                {price || "0₮"}
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
                Сагсанд нэмэх
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
