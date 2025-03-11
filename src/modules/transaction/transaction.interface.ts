// 1. Create an interface representing a document in MongoDB.

// import { Types } from 'mongoose';
import { Types } from 'mongoose';

export type ITransaction = {
  transactionID: string;
  date?: Date; // date na dile ajker date
  details: string;
  customer: Types.ObjectId;
  debit?: number; // default to zero
  credit?: number; // default to zero
};
