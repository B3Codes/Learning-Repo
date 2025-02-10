const express = require('express');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit')
const app = express();
const port = 5000;


const limiter = rateLimit({ windowMS: 15 * 60 * 1000,max: 100});
const HF_TOKEN = "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";


// Middleware
app.use(limiter) // rate limit requests
app.use(cors())// allow cross-origin request
app.use(express.json()) // parse json request bodies

// Test route
app.get('/', (req, res) => {
  res.send("Backend is running...");
});

// POst route

app.post('/api/analyzeSentiment', async (req, res) => {
  try{

    const {text} = req.body;
    console.log("Received text: ", text);

    // call the Hugging Face API
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english',
      {inputs: text},
      {headers: {'Authorization': `Bearer ${HF_TOKEN}`}}
    );

    if(response.data.error) {
      if(response.data.error.includes("loading")) {
        console.log("Model is loading...");
        return res.status(503). json({error: "Model is loading. Please try again in 20 seconds."});
      }
      throw new Error(response.data.error);
    }

    // console.log("response: ", response);
    console.log("respose_data",response.data);

    const sentiment = response.data[0];
    res.json(sentiment);

  } catch (error) {
    res.status(500).json({"error": error});
  }
})


// starts server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})