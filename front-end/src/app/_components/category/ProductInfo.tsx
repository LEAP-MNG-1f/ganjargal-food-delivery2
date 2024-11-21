import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { cloneElement, forwardRef, useState } from "react";

interface FadeProps {
  children: React.ReactElement<any>;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function ProductInfo() {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              component="img"
              src="https://via.placeholder.com/400x300" // Replace with your pizza image URL
              alt="Pizza"
              sx={{ width: "100%", borderRadius: "8px", mb: 2 }}
            />
            <Typography id="spring-modal-title" variant="h5" component="h2">
              Main Pizza
            </Typography>
            <Typography
              id="spring-modal-description"
              sx={{ mt: 1, color: "text.secondary" }}
            >
              Olives, basil, pepper, cheese, and tomato sauce.
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 2, fontWeight: "bold", color: "text.primary" }}
            >
              $34.00
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={handleDecrement} color="primary">
                  <RemoveIcon />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{ mx: 2, fontWeight: "bold", color: "text.primary" }}
                >
                  {quantity}
                </Typography>
                <IconButton onClick={handleIncrement} color="primary">
                  <AddIcon />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                color="success"
                size="large"
                onClick={() => {
                  console.log(`Added ${quantity} items to cart!`);
                  handleClose();
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
