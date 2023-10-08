import {Box, List, ListItemButton, ListItemIcon, ListItemText, Stack, Switch} from "@mui/material";
import {AutoStories, Brightness2, Group, Home, Person4, Settings, Storefront} from "@mui/icons-material";
import theme from "../theme";

const Sidebar = () => {
  return (
      <Stack direction={"column"} flex={12 } p={2} mt={5} sx={{
        display: {xs: "none", sm: "none", md: "block", lg: "block", xl: "block"},
        position: "sticky",
      }}>
      <Box>
        <List
          component="nav">
          <ListItemButton component={"a"} href={"/"}>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"/quotes"}>
            <ListItemIcon>
              <AutoStories/>
            </ListItemIcon>
            <ListItemText primary="Quotes"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"/market"}>
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Market"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#groups"}>
            <ListItemIcon>
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#friends"}>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#settings"}>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#profile"}>
            <ListItemIcon>
              <Person4/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#profile"}>
            <ListItemIcon>
              <Brightness2/>
            </ListItemIcon>
            <Box sx={{display:"flex"}}>
              <Switch id={"darkModeSwitch"} defaultChecked={false} sx={{color: theme.palette.primary.main}}/>
            </Box>
          </ListItemButton>
        </List>
      </Box>
    </Stack>
  )
}

export default Sidebar;