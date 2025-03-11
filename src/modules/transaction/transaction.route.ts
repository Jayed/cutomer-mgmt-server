import express from 'express';
import { TransactionControllers } from './transaction.controller';

const routerTransaction = express.Router();

routerTransaction.get('/', TransactionControllers.getAllTransactions);

routerTransaction.get('/:id', TransactionControllers.getTransactionById);

routerTransaction.post('/create-transaction', TransactionControllers.createTransaction);

routerTransaction.put('/:TransactionId', TransactionControllers.updateTransactionById);

routerTransaction.delete('/:TransactionId', TransactionControllers.deleteTransactionById);

export const TransactionRoutes = routerTransaction;