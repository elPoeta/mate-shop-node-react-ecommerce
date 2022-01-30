import express, { Request, Response } from "express";
import cors from 'cors';

const PORT: string = process.env.PORT || '5000';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`Server ran on port ${PORT}`);
});
