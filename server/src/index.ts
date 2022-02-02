import './config/envConf'
import express, { Application, Request, Response } from 'express';
import connectionDB from './config/connection';
import cors from 'cors';

connectionDB();

const PORT: undefined | string = process.env.PORT;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`Server ran on port ${PORT}`);
});
