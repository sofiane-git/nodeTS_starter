import express from 'express';

const app = express();
const PORT = process.env.PORT as string;
const HOSTNAME = process.env.HOSTNAME as string;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on: ${HOSTNAME}:${PORT}`);
});
