import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Allproducts } from '../Data/Allproducts';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#212121',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open
      ? {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }
      : {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
  })
);

const MainContent = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    ...(open && {
      marginLeft: drawerWidth,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

function ProductDetail() {
  const { id } = useParams();
  const product = Allproducts.find((p) => p.id === parseInt(id));
  const [cart, setCart] = React.useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false); // Sidebar open/close state
  const navigate = useNavigate();
  const theme = useTheme();

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      return updatedCart;
    });
    setSnackbarOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      return updatedCart;
    });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const handleSidebarNavigation = (path) => {
    navigate(path);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const similarProducts = Allproducts.filter(
    (p) => p.mainCategory === product.mainCategory && p.id !== product.id
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold' }}>
            Fashique
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Products', icon: <StorefrontIcon />, path: '/dashboard' },
            { text: 'Orders', icon: <ShoppingCartIcon />, path: '/cart' },
            { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
            { text: 'Customers', icon: <PeopleIcon />, path: '/customers' },
            { text: 'Contact us', icon: <ContactPhoneIcon />, path: '/contact' },
          ].map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleSidebarNavigation(path)}>
                <ListItemIcon sx={{ color: '#555' }}>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, fontWeight: 'bold' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <MainContent open={open}>
        <DrawerHeader /> {/* Add space for the AppBar */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '40px', padding: '20px' }}>
          {/* Image on the Left */}
          <Box sx={{ flex: 1, maxWidth: '500px' }}>
            <img
              src={product.url}
              alt={product.title}
              style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
            />
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#212121' }}>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Brand:</strong> {product.brand}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Price:</strong> ₹{product.price}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Discount:</strong> {product.discount}%
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Warranty:</strong> {product.warranty}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Actual Price:</strong> ₹{product.actualPrice}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Discounted Price:</strong> ₹{product.discountedPrice}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Size:</strong> {product.size.join(', ')}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>In Stock:</strong> {product.inStock}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Material:</strong> {product.material}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Colors:</strong> {product.colors.join(', ')}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Rating:</strong> {product.rating}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              <strong>Review Count:</strong> {product.reviewCount}
            </Typography>

            {cart.some((item) => item.id === product.id) ? (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff4444',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#cc0000' },
                  width: '200px',
                  mt: 2,
                }}
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00796b',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#004d40' },
                  width: '200px',
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            )}

            <Button
              variant="outlined"
              sx={{
                borderColor: '#00796b',
                color: '#00796b',
                '&:hover': { borderColor: '#004d40', color: '#004d40' },
                width: '200px',
                mt: 2,
              }}
              onClick={() => navigate('/dashboard')}
            >
              Back to Products
            </Button>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4, color: '#212121' }}>
          Similar Products
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 3,
            mt: 2,
          }}
        >
          {similarProducts.map((similarProduct) => (
            <Box
              key={similarProduct.id}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
                padding: 2,
              }}
              onClick={() => navigate(`/product/${similarProduct.id}`)}
            >
              <img
                src={similarProduct.url}
                alt={similarProduct.title}
                style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
              />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                {similarProduct.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                <strong>Price:</strong> ₹{similarProduct.price}
              </Typography>
            </Box>
          ))}
        </Box>


        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {cart.some((item) => item.id === product.id)
              ? 'Removed from cart successfully!'
              : 'Added to cart successfully!'}
          </Alert>
        </Snackbar>
      </MainContent>
    </Box>
  );
}

export default ProductDetail;