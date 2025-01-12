import React from "react";
import {
  AppBar,
  //Avatar,
  //Badge,
  Box,
  //Button,
  Container,
  IconButton,
  Menu,
  //MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
//import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const BottomInfo = () => {
  const [NavMenu, setAnchorNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleNewMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  return (
    <div className="BottomInfo">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 0,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BeGosha Area
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNewMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={NavMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(NavMenu)}
                onClose={handleNewMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
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
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BeGosha Area
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default BottomInfo;