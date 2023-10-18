import React from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, styled, Toolbar, Typography} from "@mui/material";
import {Pets} from "@mui/icons-material";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import theme from "../theme";
import MenuListComposition from "./SmallMenu";
import {StyledAvatar} from "../Common";
import {Link} from "react-router-dom";


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
            <SettingsApplicationsIcon href={"/setting"} sx={{
              "&:hover": { color: theme.palette.primary.light,
                "&:active": {color: theme.palette.secondary.light},
                display: {xs: "none", sm: "block"}
              }
            }}>
              <Link to={"/setting"}>Settings</Link>
            </SettingsApplicationsIcon>
            <Avatar onClick={e => setNavOpen(true) }
                    src={"static/images/flag-for-israel-svgrepo-com.svg"}
                    sx={{height: 25, width: 25, display: "flex", backgroundColor: "white", marginRight:5}}/>
          </Icons>
          <UserBox onClick={e => setNavOpen(true)} me={10}>
            <StyledAvatar
              src="static/images/flag-for-israel-svgrepo-com.svg" />
            <Typography variant="span">Israel</Typography>
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
