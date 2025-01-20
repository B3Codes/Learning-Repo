import React from "react";
import { Grid, CircularProgress} from "@mui/material"
import { useSelector } from "react-redux";

import { MainContainer } from "./styles.js"; // Importing the styled component

import Post from "./Post/Post";
// import { isPlainObject } from "redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    // <>
    //   <h1>POSTS</h1>
    //   <Post/>
    //   <Post/>
    // </>

    !posts.length ? <CircularProgress/> : (
      <Grid className={MainContainer} container alignItems='stretch' spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId = {setCurrentId}/>
            </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;