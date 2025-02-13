import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import waitlistRoutes from './routes/waitlist.routes';

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ['http://localhost:4200'],
    credentials: true,
  })
);

app.use(express.json());

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// MongoDB Connection
const MONGODB_URI =
  process.env['MONGODB_URI'] ||
  'mongodb+srv://kachi:53TPegXYzUeoYPCt@waitlistentries.ug0xc.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: Error) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Start server
const PORT = Number(process.env['PORT']) || 3000;
const HOST = process.env['HOST'] || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api', waitlistRoutes);

export default app;
