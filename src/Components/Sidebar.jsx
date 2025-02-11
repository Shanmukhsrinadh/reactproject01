import * as React from 'react';
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
import { Allproducts } from '../Data/Allproducts';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselStyle = {
    height: '360px',
    objectFit: 'cover',
    marginTop: '30px',
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/commercem4/assets/images/3.jpg"
          alt="First slide"
          style={carouselStyle}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg"
          alt="Second slide"
          style={carouselStyle}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/0jTTkV9m/steptodown-com277524.jpg"
          alt="Third slide"
          style={carouselStyle}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

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
  backgroundColor: '#00796b',  // Change this to your desired color
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
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      // marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  })
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openCategories, setOpenCategories] = React.useState(false);
  const [openSubcategories, setOpenSubcategories] = React.useState({
    Men: false,
    Women: false,
    Kids: false,
  });

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleCategoryClick = () => setOpenCategories(!openCategories);
  const handleSubcategoryClick = (category) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const allproducts = Allproducts;

  const handleAddToCart = (product) => {
    console.log(`Added ${product.title} to the cart.`);
    // Logic to add the product to the cart
  };

  const handleViewProduct = (product) => {
    console.log(`Viewing product: ${product.title}`);
    // Logic to navigate to the product details page
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pack.com
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
          {[{ text: 'Products', icon: <StorefrontIcon /> },
            { text: 'Orders', icon: <ShoppingCartIcon /> },
            { text: 'Categories', icon: <CategoryIcon />, expandable: true },
            { text: 'Customers', icon: <PeopleIcon /> },
            { text: 'Contact us', icon: <ContactPhoneIcon/> }].map(({ text, icon, expandable }) => (
            <div key={text}>
              <ListItem disablePadding>
                <ListItemButton onClick={expandable ? handleCategoryClick : undefined}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              {text === 'Categories' && openCategories && (
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {['Men', 'Women', 'Kids'].map((category) => (
                    <div key={category}>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleSubcategoryClick(category)}>
                          <ListItemIcon><CategoryIcon /></ListItemIcon>
                          <ListItemText primary={category} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                      </ListItem>
                      {openSubcategories[category] && (
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                          {['Shirts', 'Pants', 'Footwear', 'Wearables'].map((subcategory) => (
                            <ListItem key={subcategory} disablePadding>
                              <ListItemButton>
                                <ListItemText primary={subcategory} sx={{ opacity: open ? 1 : 0 }} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </div>
                  ))}
                </List>
              )}
            </div>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <MainContent open={open}>
        {/* Replaced Carousel with your new version */}
        <ControlledCarousel />

        <Typography variant="h5" gutterBottom>
          All Products
        </Typography>
        {allproducts.length === 0 ? (
          <Typography>No products available.</Typography>
        ) : (
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 2 }}>
            {allproducts.map((product) => (
              <Box key={product.id} sx={{ border: '1px solid #ccc', padding: 2 }}>
                <img src={product.url} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2">Price: ₹{product.price}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <button onClick={() => handleViewProduct(product)}>View Product</button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </MainContent>
    </Box>
  );
}
