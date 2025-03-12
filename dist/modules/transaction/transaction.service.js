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
    const result = yield transaction_model_1.TransactionModel.find().populate("customer"); // Populate customer details;
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
const createTransactionIntoDB = (Transaction) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('Services:', Transaction);
    const result = yield transaction_model_1.TransactionModel.create(Transaction);
    return result;
});
// const createTransactionIntoDB = async (transactionData: ITransaction) => {
//   try {
//     console.log("Service - Creating Transaction:", transactionData);
//     const newTransaction = await TransactionModel.create(transactionData);
//     return newTransaction;
//   } catch (error) {
//     console.error("Error creating transaction in DB:", error);
//     throw new Error("Error creating transaction");
//   }
// };
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
