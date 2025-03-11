import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CustomerRoutes } from './modules/customer/customer.route';
import { TransactionRoutes } from './modules/transaction/transaction.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

// import cors from 'cors';
const app: Application = express();

//parser (Middleware)
app.use(express.json());
app.use(cors());

// Root route
app.get('/', async (req: Request, res: Response) => {
  // console.log("Root directory");
  res.status(200).json({
    message: 'Hi, Welcome to customerMgmt API Service!',
    success: true,
  });
});

// application routes
app.use('/api/v1/customers', CustomerRoutes);
app.use('/api/v1/transactions', TransactionRoutes);

// app.use('/api/v1/orders', OrderRoutes);
// console.log("app.ts");

app.use(globalErrorHandler);

export default app;