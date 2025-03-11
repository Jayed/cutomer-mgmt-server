import { NextFunction, Request, Response } from 'express';
import { TransactionServices } from './transaction.service';
import { Types } from 'mongoose';

// Finding all transactions
const getAllTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TransactionServices.getAllTransactionsFromDB();
    // console.log('controller:', result);
    // send response
    res.status(200).json({
      success: true,
      message: 'Transactions are retrieved successfully.',
      data: result,
    });
  } catch (error) {
   next(error);
  }
};

// Get specific by Id
const getTransactionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params; // Correct param extraction
    // console.log(id);
    const transaction = await TransactionServices.getTransactionByIdFromDB(id);

    if (!transaction) {
      res.status(404).json({
        success: false,
        message: 'transaction not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'transaction retrieved successfully',
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

// Create new Transaction
const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transactionData = req.body;

    // Validate the customer ID
    if (
      !transactionData.customer ||
      !Types.ObjectId.isValid(transactionData.customer)
    ) {
      res.status(400).json({
        success: false,
        message: 'Invalid customer ID',
      });
    }

    // console.log('TransactionData: ', transactionData);

    // Call the service function
    const result = await TransactionServices.createTransactionIntoDB(
      transactionData
    );

    // Send response
    res.status(200).json({
      success: true,
      message: 'Transaction created successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update a Transaction
const updateTransactionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { TransactionId } = req.params;
    const updatedData = req.body;

    // Call service
    const updatedTransaction =
      await TransactionServices.updateTransactionByIdInDB(
        TransactionId,
        updatedData
      );

    if (!updatedTransaction) {
      res.status(404).json({
        message: 'Transaction not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Transaction updated successfully',
      status: true,
      data: updatedTransaction,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a Transaction
const deleteTransactionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { TransactionId } = req.params;
    const deletedTransaction =
      await TransactionServices.deleteTransactionByIdFromDB(TransactionId);

    if (!deletedTransaction) {
      res.status(404).json({
        message: 'Transaction not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Transaction deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const TransactionControllers = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransactionById,
};
