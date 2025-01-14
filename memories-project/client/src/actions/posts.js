import { act } from 'react'; // Importing act from react for testing purposes
import * as api from '../api'; // Importing all API functions

// Action creators

// Action creator for fetching posts
export const getPosts = () => async(dispatch) => {
  try {
    const {data} = await api.fetchPosts(); // Fetching posts from the API

    dispatch({ type: 'FETCH_ALL', payload: data }); // Dispatching action to the reducer with fetched data

  } catch(error) {
    console.log(error.message); // Logging any errors
  }
}

// Action creator for creating a new post
export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post); // Sending a new post to the API

    dispatch({type: 'CREATE', payload: data}); // Dispatching action to the reducer with created post data

  } catch (error) {
    console.log(error); // Logging any errors
  }
}