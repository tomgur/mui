import * as React from 'react';
import {useState} from 'react';
import {Button, Stack, Typography} from "@mui/material";
import ErrorModal from "./ErrorModal";
import Paper from "@mui/material/Paper";
import StyledComponent from "../Common";

export default function Quotes() {
  const [quote, setQuote] = useState(""); // State for the quote
  const [author, setAuthor] = useState(""); // State for the author
  const [category, setCategory] = useState(""); // State for the category
  const [error, setError] = useState(null); // State for the error modal



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

  return (
    <Paper elevation={3} sx={{marginTop: 2}}>
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
        <Stack direction="column">
          <Stack direction={"row"} sx={{display: "flex", justifyContent: "center", marginBottom: 2}}>
            <Button
              variant="contained"
              sx={{ marginTop: 2, marginRight: 2, display: "flex" }}
              onClick={fetchRandomQuote}>
              Get Random Quote
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>

);
}
