import React, {useState} from "react";
import {TextField, Button, Typography, Paper } from '@mui/material'

import { Root, StyledPaper, StyledForm, FileInput, ButtonSubmit} from './styles.js';

import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts.js'

const handleSubmit = () => {

}
const Form = () => {
  const [postData, setPostData] = useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  });

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData({...postData, selectedFile: reader.result}); // set base64 string
      };
      reader.readAsDataURL(file); // convert file to base64
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));

  }

  const clear = () => {

  }


  return (
    <Paper className={StyledPaper}>
      <StyledForm autoComplete="off" noValidate className={`${Root} ${StyledForm}`} onSubmit={handleSubmit}> 
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
        name="creator"
        variant="outlined"
        label="Creator"
        fullWidth
        value={postData.creator}
        onChange={(e) => setPostData({...postData, creator: e.target.value})}       // dont do this: onChange={(e) => setPostData({creator: e.target.value})}, for every new textfield it will overwrite the value, instead we use spread oeperator to make copy of the array before making a change, sothat all the changes are present
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})} 
        />

        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value})} 
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({...postData, tags: e.target.value})} 
        />
        <div className={FileInput}>
          <input
            type = 'file'
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <Button className={ButtonSubmit} variant="contained" color="primary" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>
        <Button className={ButtonSubmit} variant="contained" color="secondary" onClick={clear}  fullWidth>Clear</Button>
      </StyledForm>
    </Paper>
  );
}

export default Form;