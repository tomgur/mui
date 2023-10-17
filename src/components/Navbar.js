import React from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, styled, Toolbar, Typography} from "@mui/material";
import {Pets} from "@mui/icons-material";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import theme from "../theme";
import MenuListComposition from "./SmallMenu";


const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center", /* Add this line to vertically center items */
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));
const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  xs: "block",
  sm: "none",
  alignItems: "center", /* Add this line to vertically center items */
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
  justifyContent: "space-between",
}));

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <AppBar sx={{justifyContent: "space-between", marginRight: 0}}>
        <StyledToolbar sx={{
          display: "flex",
          justifyContent: "strech",
          marginRight: 0,
        }}>
          <Typography variant="h6" sx={{display: {xs: "none", sm: "flex" }, marginLeft: -1}}>פרצוף תחת</Typography>
          <Pets sx={{display: {xs: "block", sm: "none"}}} onClick={() => setNavOpen(true)} />
          <Search sx={{display: {xs: "none", sm: "block"}}}>
            <InputBase placeholder={"Search"} id={"search"}></InputBase>
          </Search>
          <Icons sx={{ marginRight: -5}}>
            <Badge badgeContent={2} color={"error"}>
              <MarkunreadIcon sx={{
                "&:hover": { color: theme.palette.primary.light}, "&:active": {color: theme.palette.secondary.light},
                display: {xs: "none", sm: "block"}
              }}/>
            </Badge>
            <SettingsApplicationsIcon sx={{
              "&:hover": { color: theme.palette.primary.light,
                "&:active": {color: theme.palette.secondary.light},
                display: {xs: "none", sm: "block"}
              }
            }}/>
            <Avatar onClick={e => setMenuOpen(true) }
                    src={"static/images/flag-for-israel-svgrepo-com.svg"}
                    sx={{height: 25, width: 25, display: "flex", backgroundColor: "white", marginRight:5}}/>
          </Icons>
          <UserBox onClick={e => setMenuOpen(true)} me={10}>
            <Typography variant="span">Tom</Typography>
            <Avatar
              src={"static/images/flag-for-israel-svgrepo-com.svg"}
              sx={{height: 30, width: 30, display: "flex", backgroundColor: "white"}}/>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="nav-menu"
          open={navOpen}
          onClose={e => setNavOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuListComposition/>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
