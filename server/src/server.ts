import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate'
import routes from './routes';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(routes)
  .use(errors())
;

app.listen(5000, () => {
  console.log(
    "Server Started: http://localhost:5000"
  );
});