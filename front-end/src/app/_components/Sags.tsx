import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Sags() {
  const [open, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "Main Pizza",
      price: 34900,
      description: "Бяслаг, амтат чинжүү, улаан лооль, цэцэгт байцаа",
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder зураг
    },
  ]);

  // Сагсны нийт үнийг тооцоолох
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Тоо ширхэг нэмэх
  const incrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Тоо ширхэг хасах
  const decrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Барааг устгах
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Сагс товч */}
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Сагс
      </Button>

      {/* Drawer хэсэг */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: 400 }}
      >
        <Box sx={{ width: 400, padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Таны сагс
          </Typography>
          <Divider />
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    marginRight: 16,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
                    {item.price.toLocaleString()}₮
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <IconButton onClick={() => decrementQuantity(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ marginX: 1 }}>{item.quantity}</Typography>
                    <IconButton onClick={() => incrementQuantity(item.id)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
                <IconButton onClick={() => removeItem(item.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ marginY: 2 }} />
          {/* Нийт үнийн хэсэг */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Нийт:</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {calculateTotal().toLocaleString()}₮
            </Typography>
          </Box>
          {/* Захиалах товч */}
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Захиалах
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}
