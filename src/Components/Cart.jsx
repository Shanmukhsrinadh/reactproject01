import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Cart = ({ cart }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>No items in the cart</Typography>
      ) : (
        <List>
          {cart.map((product, index) => (
            <ListItem key={index}>
              <ListItemText primary={product.title} secondary={`₹${product.price}`} />
            </ListItem>
          ))}
        </List>
      )}
      {cart.length > 0 && (
        <Box sx={{ marginTop: 2 }}>
          <button className="btn btn-dark btn-sm w-100">Proceed to Checkout</button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
