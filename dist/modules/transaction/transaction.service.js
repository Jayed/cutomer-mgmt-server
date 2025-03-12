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
exports.TransactionServices = void 0;
const transaction_model_1 = require("./transaction.model");
// Find all Transactions
const getAllTransactionsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield transaction_model_1.TransactionModel.find().populate('customer'); // Populate customer details;
    // console.log('service:', result);
    return result;
});
// Find specific customer by Id
const getTransactionByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('service:', id);
    const Transaction = yield transaction_model_1.TransactionModel.findOne({ _id: id }); //findById(id) is optimized for _id lookups
    // console.log(Transaction);
    return Transaction;
});
// Create Transaction
// Function to get the next transaction sequence number
const getNextTransactionId = () => __awaiter(void 0, void 0, void 0, function* () {
    const counter = yield transaction_model_1.TxCounterModel.findOneAndUpdate({ id: 'txCounter' }, { $inc: { sequence: 1 } }, { new: true, upsert: true });
    return counter.sequence.toString().padStart(5, '0'); // Format as 5-digit (e.g., 00001)
});
const createTransactionIntoDB = (Transaction) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the next transaction ID
    const transactionID = yield getNextTransactionId();
    // Assign transaction ID
    Transaction.transactionID = `TX-${transactionID}`;
    // console.log('Services:', Transaction);
    // console.log(Transaction);
    const result = yield transaction_model_1.TransactionModel.create(Transaction);
    return result;
});
// Update a Transaction
const updateTransactionByIdInDB = (TransactionId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTransaction = yield transaction_model_1.TransactionModel.findByIdAndUpdate(TransactionId, Object.assign({}, updatedData), { new: true, runValidators: true } // Return updated document and validate updates
    );
    return updatedTransaction;
});
// Delete a Transaction
const deleteTransactionByIdFromDB = (TransactionId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedTransaction = yield transaction_model_1.TransactionModel.findByIdAndDelete(TransactionId);
    return deletedTransaction;
});
exports.TransactionServices = {
    getAllTransactionsFromDB,
    getTransactionByIdFromDB,
    createTransactionIntoDB,
    updateTransactionByIdInDB,
    deleteTransactionByIdFromDB,
};
