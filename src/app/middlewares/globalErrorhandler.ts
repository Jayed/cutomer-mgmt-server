/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

const globalErrorHandler = (err: any, req: Request, res: Response): void => {
  const statusCode = err.statusCode || 500; // Include statusCode if available
  const message = err.message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
