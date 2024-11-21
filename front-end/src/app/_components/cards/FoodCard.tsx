"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";

type CardProps = {
  imageSrc?: string;
  title?: string;
  price?: string;
  oldPrice?: string;
  description?: string;
};

export const FoodCard = ({
  imageSrc,
  title,
  price,
  oldPrice,
  description,
}: CardProps) => {
  const [open, setOpen] = useState(false);

  // Function to handle opening the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div className="w-[264px] h-[155px] flex flex-col rounded-2xl justify-around">
      {/* Card */}
      <div
        className="w-[264px] h-[155px] flex flex-col rounded-2xl justify-around"
        onClick={handleOpen}
      >
        <div className="flex justify-start p-2">
          <img
            src={imageSrc} // Fallback image if `imageSrc` is undefined
            alt={title || "Food Image"}
          />
        </div>
        <div className="p-2">
          <p className="text-[18px] ">{title}</p>
          {description && (
            <p className="text-[14px] text-[#272727]">{description}</p>
          )}
          <div className="flex gap-1 items-center">
            <p className="text-[14px] text-[#272727] font-semibold">{price}</p>
            {oldPrice && (
              <p className="text-[12px] text-gray-500 line-through">
                {oldPrice}₮
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <div>
            {/* Product Image */}
            {imageSrc && (
              <Box
                component="img"
                src={imageSrc}
                alt={title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  mb: 2,
                }}
              />
            )}

            {/* Product Title */}
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              {title || "No Title"}
            </Typography>

            {/* Product Description */}
            <Typography variant="body1" sx={{ mb: 2 }}>
              {description || "No description available."}
            </Typography>

            {/* Product Price */}
            {price && (
              <Typography
                variant="h6"
                color="green"
                sx={{ fontWeight: "bold" }}
              >
                {price}₮
              </Typography>
            )}

            {/* Old Price (if available) */}
            {oldPrice && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  color: "gray",
                  mt: 1,
                }}
              >
                {oldPrice}₮
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
          </div>
        </Box>
      </Modal>
    </div>
  );
};
