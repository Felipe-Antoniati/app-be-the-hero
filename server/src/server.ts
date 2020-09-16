import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(routes);

app.listen(5000, () => {
  console.log(
    "Server Started: http://localhost:5000"
  );
});