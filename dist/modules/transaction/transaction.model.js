"use strict";
// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxCounterModel = exports.TransactionModel = void 0;
const mongoose_1 = require("mongoose");
const TransactionSchema = new mongoose_1.Schema({
    transactionID: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    details: { type: String, required: [true, 'Details is required.'] },
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer is required.'],
    },
    transactionType: { type: String, required: [true, 'Transaction type is required.'] },
    quantity_amount: {
        type: Number,
        required: [true, 'Quantity or Amount is required.'],
    },
    unitPrice_rmbRate: {
        type: Number,
        required: [true, 'unitPrice or RMB Rate is required.'],
    },
    expense: { type: Number, default: 0 },
    deposit: { type: Number, default: 0 },
}, { timestamps: true });
const TxCounterSchema = new mongoose_1.Schema({
    id: { type: String, required: true }, // Fixed "_id": "productCounter"
    sequence: { type: Number, required: true },
});
exports.TransactionModel = (0, mongoose_1.model)('Transaction', TransactionSchema);
exports.TxCounterModel = (0, mongoose_1.model)('TxCounter', TxCounterSchema);
