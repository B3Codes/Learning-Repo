// const express = require('express');
// const urlRoute = require('./routes/url')
// const URL = require('./models/url')
// const { connectToMongoDB } = require('./connection')

// const app = express();
// const PORT = 8001;

// connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
// .then(() => console.log("connected Successfuly!"))

// app.use(express.json());

// app.use("/url",urlRoute);

// app.get('/:shortId', async(req, res) => {
//   const shortId = req.params.shortId;
//   const entry = await URL.findOneAndUpdate({
//     shortId,
//   }, {
//     $push: {
//       visitHistory: {
//         timestamp: Date.now()
//       },
//     }
//   });
//   console.log(entry);
//   res.redirect(entry.redirectUrl);
// })

// app.listen(PORT, () => console.log(`Server started at port ${PORT}`));


const express = require('express');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const { connectToMongoDB } = require('./connection');

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("Connected successfully!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  try {
    // Find the URL entry and update visit history
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true } // Return the updated document
    );

    if (!entry) {
      return res.status(404).json({ error: 'Short URL not found.' });
    }

    // Ensure redirectUrl has the proper protocol
    const redirectUrl = entry.redirectUrl.startsWith('http')
      ? entry.redirectUrl
      : `https://${entry.redirectUrl}`;

    console.log('Redirecting to:', redirectUrl);
    res.redirect(redirectUrl);
  } catch (err) {
    console.error('Error fetching or updating entry:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
