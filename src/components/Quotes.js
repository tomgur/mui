import * as React from 'react';
import {useState} from 'react';
import {Button, Stack, styled, Typography} from "@mui/material";
import {TextareaAutosize} from '@mui/base/TextareaAutosize';
import MenuIntroduction from "./CatagoryDropDown";
import ErrorModal from "./ErrorModal";
import {StackedBarChart} from "@mui/icons-material";

export default function Quotes() {
  const [quote, setQuote] = useState(""); // State for the quote
  const [author, setAuthor] = useState(""); // State for the author
  const [category, setCategory] = useState(""); // State for the category
  const [error, setError] = useState(null); // State for the error modal
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


  const handleQuoteChange = (event) => {
    setQuote(event.target.value); // Update the quote state
  };

  async function fetchRandomQuote() {
    try {
      const hasCategory = category !== "";
      const url = hasCategory?`https://go-backend.tomgur.me:8080/random-quote?category=${category.toLowerCase()}`:'https://go-backend.tomgur.me:8080/random-quote'
      console.log("hasCategory: " + hasCategory)
      console.log("category: ", category)
      console.log("url: ", url)
      const response = await fetch(url);
      const data = await response.json();
      console.info("quote: " + data.QUOTE)
      console.info("author: " + data.AUTHOR)
      console.info("category: " + data.CATEGORY)
      const fixedCategory = capitalizeFirstLetter(data.CATEGORY);
      setQuote(data.QUOTE); // Update the quote state
      setAuthor(data.AUTHOR); // Update the author state
      setCategory(fixedCategory); // Update the category state
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError(error.message || 'Error fetching quote')
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const StyledComponent = styled(TextareaAutosize)(
    ({ theme }) => `
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
    <Stack direction="column" display={"flex"} marginLeft={2}>
      <div>
        <ErrorModal
        isOpen={error !== null}
        onClose={() => setError(null)}
        errorMessage={error} />
      </div>
      <Stack direction="row" marginTop={10} marginBottom={1}>
        <Stack direction="column" flex={3}  justifyContent={"center"}>
          <Typography display={"flex"}  alignItems={"center"}>
            Quote:
          </Typography>
        </Stack>
        <Stack direction="column" flex={9} sx={{marginRight: 2}}>
          <StyledComponent label={"Quote"} placeholder={"Quote"} value={quote} onChange={handleQuoteChange} disabled />
        </Stack>
      </Stack>
      <Stack direction="row" marginBottom={1}>
        <Stack direction="column" flex={3} justifyContent={"center"}>
          <Typography display={"flex"}  alignItems={"center"}>
            Author:
          </Typography>
        </Stack>
        <Stack direction="column" flex={9} sx={{marginRight: 2}}>
          <StyledComponent label={"Author"} placeholder={"Author"} value={author} onChange={handleQuoteChange} disabled />
        </Stack>
      </Stack>
      <Stack direction="row" marginBottom={1}>
        <Stack direction="column" flex={3} justifyContent={"center"}>
          <Typography display={"flex"}  alignItems={"center"}>
            Category:
          </Typography>
        </Stack>
        <Stack direction="column" flex={9} sx={{marginRight: 2}}>
          <StyledComponent label={"Category"} placeholder={"Category"} value={category} onChange={handleQuoteChange} disabled />
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{display: "flex", alignItems: "center", alignContent: "center"}}>
        <Button
          variant="contained"
          sx={{ marginTop: 2, marginRight: 2, display: "flex" }}
          onClick={fetchRandomQuote}>
          Get Random Quote
        </Button>
        <MenuIntroduction />
      </Stack>
    </Stack>
  );
}
