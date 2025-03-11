// 1. Create an interface representing a document in MongoDB.

// import { Types } from 'mongoose';
import { Types } from 'mongoose';

export type ITransaction = {
  transactionID: string;
  date?: Date; // date na dile ajker date
  details: string;
  customer: Types.ObjectId;
  quantity_amount: number;
  unitPrice_rmbRate: number;
  expense?: number; // default to zero
  deposit?: number; // default to zero
};
