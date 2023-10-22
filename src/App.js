import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Container, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Quotes from "./components/Quotes";
import Bitcoin from "./components/Bitcoin";
import Settings from "./components/Settings";
import Calc from "./components/Calc";
import {googleLogout, useGoogleLogin} from "@react-oauth/google";
import {useEffect, useState} from "react";
import axios from 'axios';

const App = () => {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [ user ]
  ); // only re-run the effect if no user is logged in

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <Container maxWidth={"100%"}>
      <Router>
        <div>
          <h2>React Google Login</h2>
          <br />
          <br />

          {profile ? (
            <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
              <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}

        </div>
        <div className={"app"}>
          <Stack direction={"row"} justifyContent={"stretch"}>
            <Navbar profilePicture={profile?profile.picture:"static/images/flag-for-israel-svgrepo-com.svg"} />
          </Stack>
          <Stack direction={"row"}>
            <Stack direction={"column"} flex={1} sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              }
            }}>
              <Sidebar />
            </Stack>
            <Stack direction={"column"} flex={6}>
              <Switch>
                <Route exact path={"/"} component={Feed} />
                <Route exact path={"/quotes"} component={Quotes} />
                <Route exact path={"/market"} component={Bitcoin} />
                <Route exact path={"/settings"} component={Settings} />
                <Route exact path={"/calc"} component={Calc} />
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
