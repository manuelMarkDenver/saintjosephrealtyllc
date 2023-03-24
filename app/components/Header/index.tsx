"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import TopBar from './TopBar'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";

const pages = [
  "Home",
  // "About Us",
  "Services",
  "Projects",
  "Mission & Vision",
  "Capability Statement",
  "Contact Us",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <TopBar />
      <AppBar
        position="static"
        sx={{
          bgcolor: "#eaeaea",
          color: "black",
        }}
        className={"py-5"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack direction="row">
              <Image
                src={"/images/site-logo.png"}
                alt="site-logo"
                width={62}
                height={62}
                className="mr-3"
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                  alignSelf: "flex-end",
                }}
                className="font-lato hidden md:block md:text-xl"
              >
                Saint Joseph Realty LLC
              </Typography>
            </Stack>

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
                {/* mobile */}
                {pages.map((page) =>
                  page === "Home" ? (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link href={"/"}>
                        <Typography
                          textAlign="center"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ) : page === "Mission & Vision" ? (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <a href={`/#missionvision`}>
                        <Typography
                          textAlign="center"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {page}
                        </Typography>
                      </a>
                    </MenuItem>
                  ) : page === "Capability Statement" ? (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link href="/capability">
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <a href={`/#${page.replace(" ", "").toLowerCase()}`}>
                      {/* <a href={`/#${page.toLowerCase()}`}> */}
                        <Typography
                          textAlign="center"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {page.toLowerCase()}
                        </Typography>
                      </a>
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                flexGrow: 1,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="font-lato block text-xs text-center md:text-2xl md:hidden whitespace-normal overflow-clip"
            >
              Saint Joseph Realty LLC
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {/* desktop */}
              {pages.map((page) =>
                page === "Home" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={`/`}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ) : page === "Mission & Vision" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <a href={`/#missionvision`}>
                      <Typography textAlign="center">{page}</Typography>
                    </a>
                  </MenuItem>
                ) : page === "Capability Statement" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href="/capability">
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <a href={`/#${page.replace(" ", "").toLowerCase()}`}>
                    {/* <a href={`/#${page.replace(" ", "").toLowerCase()}`}> */}
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          color: "black",
                          display: "block",
                        }}
                      >
                        <Typography
                          textAlign="center"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {page.toLowerCase()}
                        </Typography>
                      </Button>
                    </a>
                  </MenuItem>
                )
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
