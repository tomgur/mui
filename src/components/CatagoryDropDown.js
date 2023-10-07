import * as React from 'react';
import {Dropdown} from '@mui/base/Dropdown';
import {Menu} from '@mui/base/Menu';
import {MenuButton} from '@mui/base/MenuButton';
import {MenuItem, menuItemClasses} from '@mui/base/MenuItem';
import {styled} from '@mui/system';

export default function MenuIntroduction() {
  const [selectedCategory, setSelectedCategory] = React.useState(""); // State for the selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Dropdown>
      <TriggerButton sx={{color: "white", margin: 1, disabled: true}} disabled>{selectedCategory || 'CHOOSE CATEGORY'}</TriggerButton>
      <Menu slots={{listbox: StyledListbox}}>
        <StyledMenuItem onClick={() => handleCategoryClick('success')}>
          Success
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('movies')}>
          Movies
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('morning')}>
          Morning
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('money')}>
          Money
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('mom')}>
          Mom
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('men')}>
          Men
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('medical')}>
          Medical
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleCategoryClick('marriage')}>
          Marriage
        </StyledMenuItem>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({theme}) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({theme}) => `
  list-style: none;
  padding: 1px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
  ({theme}) => `
  font-family: Roboto, sans-serif;
  font-weight: 500;
  padding: 2px 12px;
  border-radius: 8px;
  background: ${theme.palette.primary.main};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.primary.light};
    border-color: ${theme.palette.primary.light};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);