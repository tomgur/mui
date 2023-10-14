import {Grid, Stack, Switch} from "@mui/material";

const Settings = () => {
  return (
    <Grid container direction={"row"} alignContent={"center"}>
      <Grid item marginTop={10} marginLeft={2} xs={6} sm={6} md={6} lg={4} alignContent={"center"}>
        <Stack gap={2} minWidth={"70%"}  alignContent={"center"}>
          <h1>Settings</h1>
          Setting1: <Switch defaultChecked={true}/>
          Setting2: <Switch/>
        </Stack>
      </Grid>
      <Grid item marginTop={10} marginLeft={2} xs={6} sm={6} md={6} lg={4}>
        <Stack gap={2} minWidth={"30%"}>
          <h1>Settings2</h1>
          Setting3: <Switch defaultChecked={true}/>
          Setting4: <Switch/>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Settings