// 1. Create an interface representing a document in MongoDB.

// import { Types } from 'mongoose';
import { Types } from 'mongoose';

//Transaction schema
export type ITransaction = {
  transactionID: string;
  date?: Date; // date na dile ajker date
  details: string;
  customer: Types.ObjectId;
  transactionType: string;
  quantity_amount: number;
  unitPrice_rmbRate: number;
  expense?: number; // default to zero
  deposit?: number; // default to zero
};

// transaction counter schema
export type ITxCounter = {
  id: string; // Fixed "_id": "productCounter"
  sequence: number;
};
