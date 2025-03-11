// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.

import { Schema, model } from "mongoose";
import { ITransaction } from "./transaction.interface";

const TransactionSchema = new Schema<ITransaction>(
  {
    transactionID: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    details: { type: String, required: [true, 'Details is required.'], },
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: [true, 'Customer is required.'], },
    debit: { type: Number, default: 0 },
    credit: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const TransactionModel = model<ITransaction>("Transaction", TransactionSchema);