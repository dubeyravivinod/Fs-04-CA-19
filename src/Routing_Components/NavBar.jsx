// import React,{useContext} from 'react'
import '../CSS_files/NavBar.css'
import { NavLink,Link } from 'react-router-dom'
import { myContext } from '../Components/ContextProvider';
// const NavBar = () => {
//     const{cartCount}=useContext(myContext)
//     console.log(cartCount);
//   return (
//     <>
//     <div className='navbar'>
//       <h1>Shopping Mall</h1>
//       <ul>
//         <NavLink to={'/'}>
//         <li>Home</li>
//         </NavLink>
//         <NavLink to={'/product'}>
//         <li>Product</li>
//         </NavLink>
//         <NavLink to={'/cart'}>
//         <li className='count'>Add to cart {cartCount>0 ? <span>{cartCount}</span>:<p></p>}</li>
//         </NavLink>
//       </ul>
//     </div>
//     </>
//   )
// }

// export default NavBar



// **************************************************************************************



import React, { useState,useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';

// const StyledSearch = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.primary.main, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.primary.main, 0.25)
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto"
//   }
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "25ch"
//     }
//   }
// }));

//search as JSX
// const search = (
//   <StyledSearch>
//     <SearchIconWrapper>
//       {/* <SearchIcon /> */}
//     </SearchIconWrapper>
//     <StyledInputBase
//       placeholder="Suchen…"
//       inputProps={{ "aria-label": "search" }}
//     />
//   </StyledSearch>
// );

export default function MainNavigation() {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  const{cartCount}=useContext(myContext)
  return (
    <AppBar position="static">
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <h2 className='h1'>Shopping Mall</h2>
          </Typography>

          {/* <div className="navbar">
          <ul>
         <NavLink to={'/'}>
         <li>Home</li>
        </NavLink>
        <NavLink to={'/product'}>
        <li>Product</li>
        </NavLink>
        <NavLink to={'/cart'}>
        <li className='count'>Add to cart {cartCount>0 ? <span>{cartCount}</span>:<p></p>}</li>
        </NavLink>
      </ul>
          </div> */}
          <Box
           style={{margin:'1rem'}}
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}
          >
            {/* {search} */}
            <NavLink to={'/'}>
            Home
            </NavLink>
          </Box>
          <Box
          style={{margin:'1rem'}}
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}
          >
            {/* {search} */}
          <NavLink to={'/product'}>
          Product
          </NavLink>
          </Box>
          <Box
          style={{margin:'1rem'}}
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}
          >
            {/* {search} */}
          <NavLink to='/cart'>
   
          Cart  {cartCount>0 ? <span style={{background:'red',borderRadius:'50%', width:'80px',height:'30px'}}>{cartCount}</span>:null}
          </NavLink>
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none"
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 1,
                height: 1,
                backgroundColor: "#dbc8ff"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 1 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{  }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton style={{ height:'80px'}}>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                 <Link to={'/'}>
                 <ListItemText primary="Home" />
                 </Link>
                </ListItemButton>

                <ListItemButton style={{ height:'80px'}}>
                  <ListItemIcon>
                    <StorefrontIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <Link to={'/product'}>
                  <ListItemText primary="Product" />
                  </Link>
                </ListItemButton>

                <ListItemButton style={{ height:'80px'}}>
                  <ListItemIcon>
                    <ShoppingCartIcon sx={{ color: "primary.main" }} />{cartCount>0 ? <span style={{background:'red',borderRadius:'50%', width:'20px',height:'25px',textAlign:'center'}}>{cartCount}</span>:<p></p>}
                  </ListItemIcon>
                 <Link to={'/cart'}>
                 <ListItemText primary="Cart" /> 
                 </Link>
                </ListItemButton>
              </Box>

              {/* {search} */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)"
                }}
              >
                {/* <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button> */}
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

