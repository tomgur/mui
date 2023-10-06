import {Box} from "@mui/material";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2} mt={1}>
      <Post author={"R"} title={"Watching the waterfall"} img={"https://images.nationalgeographic.org/image/upload/v1638882947/EducationHub/photos/tourists-at-victoria-falls.jpg"} text={"Standing by this huge waterfall was an amazing experience. The sound of the water was deafening and the mist was so thick that it was hard to see. I was soaked to the skin but it was worth it. I would love to go back and see it again. I would recommend it to anyone."} favorite={true}/>
      <Post author={"Tom"} title={"Deer in the snow!"} img={"static/images/deer.jpg"} text={"These deer were just running in the snow outside my house - Unbelievable!!!!"} favorite={true}/>
    </Box>
  );
}
export default Feed;