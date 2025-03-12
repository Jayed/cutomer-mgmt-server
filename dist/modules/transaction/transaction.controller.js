"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionControllers = void 0;
const transaction_service_1 = require("./transaction.service");
const mongoose_1 = require("mongoose");
// Finding all transactions
const getAllTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield transaction_service_1.TransactionServices.getAllTransactionsFromDB();
        // console.log('controller:', result);
        // send response
        res.status(200).json({
            success: true,
            message: 'Transactions are retrieved successfully.',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get specific by Id
const getTransactionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Correct param extraction
        // console.log(id);
        const transaction = yield transaction_service_1.TransactionServices.getTransactionByIdFromDB(id);
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
    }
    catch (error) {
        next(error);
    }
});
// Create new Transaction
const createTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactionData = req.body;
        // Validate the customer ID
        if (!transactionData.customer ||
            !mongoose_1.Types.ObjectId.isValid(transactionData.customer)) {
            res.status(400).json({
                success: false,
                message: 'Invalid customer ID',
            });
        }
        // console.log('TransactionData: ', transactionData);
        // Call the service function
        const result = yield transaction_service_1.TransactionServices.createTransactionIntoDB(transactionData);
        // Send response
        res.status(200).json({
            success: true,
            message: 'Transaction created successfully.',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Update a Transaction
const updateTransactionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { TransactionId } = req.params;
        const updatedData = req.body;
        // Call service
        const updatedTransaction = yield transaction_service_1.TransactionServices.updateTransactionByIdInDB(TransactionId, updatedData);
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
    }
    catch (error) {
        next(error);
    }
});
// Delete a Transaction
const deleteTransactionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { TransactionId } = req.params;
        const deletedTransaction = yield transaction_service_1.TransactionServices.deleteTransactionByIdFromDB(TransactionId);
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
    }
    catch (error) {
        next(error);
    }
});
exports.TransactionControllers = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransactionById,
    deleteTransactionById,
};
