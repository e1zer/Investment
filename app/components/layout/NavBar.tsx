import React, { FC } from "react";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTypedSelector } from "@hooks/useTypedSelector";

const NavBar: FC = () => {
  const {balance} = useTypedSelector(state => state.profileReducer);
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '6rem' }}>
      <AppBar position="fixed" sx={{backgroundColor: '#2b2d42'}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
          <Typography
            variant="h6"
            component="a"
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Invest
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
            <Typography variant="h6" mr={1} component="div">{balance}$</Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => router.push("/profile")}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
