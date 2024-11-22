import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Logs the current working directory
console.log(process.cwd());

export default app;