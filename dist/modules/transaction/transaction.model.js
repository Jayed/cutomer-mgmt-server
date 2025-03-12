"use strict";
// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = void 0;
const mongoose_1 = require("mongoose");
const TransactionSchema = new mongoose_1.Schema({
    transactionID: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    details: { type: String, required: [true, 'Details is required.'], },
    customer: { type: mongoose_1.Schema.Types.ObjectId, ref: "Customer", required: [true, 'Customer is required.'], },
    debit: { type: Number, default: 0 },
    credit: { type: Number, default: 0 },
}, { timestamps: true });
exports.TransactionModel = (0, mongoose_1.model)("Transaction", TransactionSchema);
