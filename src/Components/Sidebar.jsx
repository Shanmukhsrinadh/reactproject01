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
import ReportIcon from '@mui/icons-material/Report';
import products from '../Data/products';  // Correct import for default export


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
    ...(theme.breakpoints.up('sm') && {
      marginLeft: drawerWidth,
    }),
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

  // Here, display all products
  const allProducts = products;  // Get all products without filtering by category

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            E-Commerce Dashboard
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
            { text: 'Reports', icon: <ReportIcon /> }].map(({ text, icon, expandable }) => (
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
        <Typography variant="h5" gutterBottom>
          All Products
        </Typography>
        {allProducts.length === 0 ? (
          <Typography>No products available.</Typography>
        ) : (
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {allProducts.map((product) => (
              <Box key={product.id} sx={{ border: '1px solid #ccc', padding: 2 }}>
                <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </MainContent>
    </Box>
  );
}
