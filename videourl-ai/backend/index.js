import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.json('test okk');
});

app.listen(3001, () => console.log('Listening on port 3001'));