import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import planetsRouter from './planetsRouter';

dotenv.config();

const app = express();

app.use(morgan('dev')); // Use morgan for logging requests
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api/planets', planetsRouter); // Use the router

app.get('/', (req, res) => {
  res.send('Welcome to the Planets API!');
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
