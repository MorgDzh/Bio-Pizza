import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
import pizzaLogo from "../assets/pizzaLogo.svg.png"
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const Navbar = () => {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link to="/">
                  <img width={50} src={pizzaLogo} alt="" />
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                //   onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                //   anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                //   open={Boolean(anchorElNav)}
                //   onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/admin-panel">
                    {/* <MenuItem onClick={handleCloseNavMenu}> */}
                    {/* <MenuItem>
                      <Typography textAlign="center">Admin PANEL</Typography>
                    </MenuItem> */}
                  </Link>
                  <Link to="/admin-panel/add">
                    {/* <MenuItem onClick={handleCloseNavMenu}> */}
                    {/* <MenuItem>
                      <Typography textAlign="center">ADD PRODUCT</Typography>
                    </MenuItem> */}
                  </Link>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <Link to="/">
                  <img width={50} src={pizzaLogo} alt="" />
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/admin-panel">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    ADMIN PANEL
                  </Button>
                </Link>
                <Link to="/admin-panel/add">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    ADD PRODUCT
                  </Button>
                </Link>
              </Box>

              <Box
                style={{ display: "flex", alignItems: "center" }}
                sx={{ flexGrow: 0 }}
              >
                <Link to="/cart" style={{ marginRight: 10 }}>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Navbar;
