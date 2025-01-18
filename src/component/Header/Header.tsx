import React from "react";
import {
  AppBar,
  //Avatar,
  //Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  //Tooltip,
  Typography,
} from "@mui/material";
//import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import './Header.css'

const pages = ["Profile", "About Area", "Products", "Cart"];//, "login", "Register"
const title_version = "BeGosha Area 1.2.95";
const Header = () => {
  /*const [NavMenu, setAnchorNav] = React.useState<null | HTMLElement>(
      null
    );*/
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
      null
    );
    /*const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
    );
    const handleNewMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorNav(event.currentTarget);
    };*/
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    /*const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };*/
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    /*const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };*/
  return (
    <div className="Header">
      <AppBar position="fixed"  style={{background: '#060606'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#FDFDFD",
                textDecoration: "none",
              }}
            >
              {title_version}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      /*component={Link}
                      to={`/${page.toLowerCase()}`}*/
                      noWrap
                      component="a"
                      href={`/${page.toLowerCase()}`}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#FDFDFD",
                textDecoration: "none",
              }}
            >
              {title_version}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  /*component={Link}
                  to={`/${page.toLowerCase()}`}*/
                  component="a"
                  href={`/${page.toLowerCase()}`}
                  onClick={handleOpenNavMenu}
                  sx={{ my: 2, color: "#FDFDFD", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;