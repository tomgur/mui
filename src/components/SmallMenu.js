import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
  ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <Stack direction="row">
      <Paper sx={{ marginBottom: -1 }}>
        <MenuList
          autoFocusItem={open}
          id="menu-list-grow"
          onKeyDown={handleListKeyDown}
          onMouseEnter={handleToggle}
          onMouseLeave={handleClose}>
          <MenuItem  onClick={handleToggle} href={"/"}>
            <Link to={"/"} style={{ textDecoration: 'none' }}>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleToggle}>
            <Link to={"/quotes"} style={{ textDecoration: 'none' }}>Quotes</Link>
          </MenuItem>
          <MenuItem onClick={handleToggle}>
            <Link to={"/market"}  style={{ textDecoration: 'none' }}>Market</Link>
          </MenuItem>
          <MenuItem onClick={handleToggle}>
            <Link to={"/calc"}  style={{ textDecoration: 'none' }}>Utilities</Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}