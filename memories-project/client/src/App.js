import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import memories from './images/memories.png';
import { StyledAppBar, StyledHeading, ImageWrapper } from './styles.js';

import { getPosts } from './actions/posts.js'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form.js';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <Box display="flex" alignItems="center" justifyContent="center">
          <StyledHeading variant="h2" align="center">
            Memories
          </StyledHeading>
          <ImageWrapper>
            <img src={memories} alt="memories" height="60" />
          </ImageWrapper>
        </Box>
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId = {setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} setCurrentId = {setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
