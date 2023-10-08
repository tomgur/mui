import * as React from "react";
import {useState} from "react";
import {Button, Stack, styled, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {TextareaAutosize} from "@mui/base/TextareaAutosize";

export default function Bitcoin() {
  const [price, setPrice] = useState(0.0)
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
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
  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch('https://go-backend.tomgur.me:8080/bitcoin-price');
      const data = await response.json();
      console.info("price: " + data)
      setPrice("$" + data);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  }
  const StyledComponent = styled(TextareaAutosize)(
    ({theme}) => `
      padding: 0.75rem 1rem;
      font-family: Roboto, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      border-radius: 12px 12px 0 12px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    
      &:hover {
        border-color: ${blue[400]};
      }
    
      &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `,
  );
  return (
    <Paper sx={{marginTop: 10, padding: 1, marginX:2}}>
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          <Typography margin={1.5}>Bitcoin Price:</Typography>
          <StyledComponent
            disabled
            label={"Price"}
            placeholder={"Price"}
            value={price}
            onChange={handlePriceChange}
          />
        </Stack>
        <Stack direction={"row"} margin={1} sx={{
          justifyContent: 'center',
          justifyItems: 'center',
          justifySelf: 'center',
        }}>
          <Button variant={"contained"} onClick={fetchBitcoinPrice}>Bitcoin Price</Button>
        </Stack>
      </Stack>
    </Paper>
  )
}