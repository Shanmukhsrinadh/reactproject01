import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography sx={{ color: "#777" }}>Your cart is empty.</Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 3,
          }}
        >
          {cartItems.map((product) => (
            <Box
              key={product.id}
              sx={{
                backgroundColor: "#fff",
                padding: 2,
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={product.url}
                alt={product.title}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
                Price: ₹{product.price}
              </Typography>

              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleRemoveFromCart(product)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cart;
