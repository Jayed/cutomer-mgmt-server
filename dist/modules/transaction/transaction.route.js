"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const transaction_controller_1 = require("./transaction.controller");
const routerTransaction = express_1.default.Router();
routerTransaction.get('/', transaction_controller_1.TransactionControllers.getAllTransactions);
routerTransaction.get('/:id', transaction_controller_1.TransactionControllers.getTransactionById);
routerTransaction.post('/create-transaction', transaction_controller_1.TransactionControllers.createTransaction);
routerTransaction.put('/:TransactionId', transaction_controller_1.TransactionControllers.updateTransactionById);
routerTransaction.delete('/:TransactionId', transaction_controller_1.TransactionControllers.deleteTransactionById);
exports.TransactionRoutes = routerTransaction;
