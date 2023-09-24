import express from 'express';
import routes from './api/Routes/index.js'

const app = express();

routes(app);

app.use(express.json());
app.use(express.urlencoded());
const port = 9000;
app.listen(port)