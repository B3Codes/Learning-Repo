import React from "react";
import { Card, CardAction, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import Delete from '@mui/icons-material/Delete';
import MoreHoriz from '@mui/icons-material/MoreHoriz';


import { Media, Border, FullHeightCard, CardContainer, Overlay, Overlay2, GridContainer, Details, Title, CardActions } from './style'; // Importing the styled components
import moment from "moment";


const Post = ({post, setCurrentId}) => {
  return (
    // <h1>POST</h1>
    <CardContainer>
      <Media
        image={post.selectedFile}
        title={post.title}
      />
      <Overlay> 
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>

      <Overlay2>
        <Button style={{color:'white'}} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHoriz fontSize="default" />
        </Button>
      </Overlay2>

      <Details>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>
      <CardContent>
        <Typography className={Title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() =>{}}>
          <ThumbUpAlt fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>

    </CardContainer>
  );
}

export default Post;