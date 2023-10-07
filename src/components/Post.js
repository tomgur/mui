import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import {Favorite, FavoriteBorder, MoreVert} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";

function Post(props){
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => { setChecked(event.target.checked); };
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: props.avatarColor}}>
            {props.author}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title={props.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        width="20%"
        image={props.img}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder/>} onChange={handleChange} checkedIcon={<Favorite/>} color={"error"}
                    checked={props.favorite} id={"cardFavorite"}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
  </Card>
  )
}

export default Post