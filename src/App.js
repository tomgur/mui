import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import {Container, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Quotes from "./components/Quotes";
import Add from "./components/Add";
import Bitcoin from "./components/Bitcoin";

const App = () => {
  return (
    <Container>
      <Router>
        <div className={"app"}>
          <Stack direction={"row"} justifyContent={"stretch"}>
            <Navbar />
          </Stack>
          <Stack direction={"row"}>
            <Stack direction={"column"} flex={1} sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              }
            }}            >
              <Sidebar />
            </Stack>
            <Stack direction={"column"} flex={10}>
              <Switch>
                <Route exact path={"/"} component={Feed} />
                <Route exact path={"/quotes"} component={Quotes} />
                <Route exact path={"/market"} component={Bitcoin} />
              </Switch>
            </Stack>
            <Stack direction={"column"} flex={1} sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              }
            }}>
              <Rightbar />
            </Stack>
          </Stack>
        </div>
      </Router>
    </Container>
  )
};


export default App;
