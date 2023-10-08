import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Container, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Quotes from "./components/Quotes";
import Bitcoin from "./components/Bitcoin";

const App = () => {
  return (
    <Container maxWidth={"100%"}>
      <Router>
        <div className={"app"}>
          <Stack direction={"row"} justifyContent={"stretch"}>
            <Navbar />
          </Stack>
          <Stack direction={"row"}>
            <Stack direction={"column"} flex={1} sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
              }
            }}>
              <Sidebar />
            </Stack>
            <Stack direction={"column"} flex={6}>
              <Switch>
                <Route exact path={"/"} component={Feed} />
                <Route exact path={"/quotes"} component={Quotes} />
                <Route exact path={"/market"} component={Bitcoin} />
              </Switch>
            </Stack>
            <Stack direction={"column"} flex={3} sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              }
            }}>
              <Rightbar sx={{ marginRight:0 }} />
            </Stack>
          </Stack>
        </div>
      </Router>
    </Container>
  )
};


export default App;
