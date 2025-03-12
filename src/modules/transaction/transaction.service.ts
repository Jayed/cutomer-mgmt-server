import { ITransaction } from './transaction.interface';
import { TransactionModel, TxCounterModel } from './transaction.model';

// Find all Transactions
const getAllTransactionsFromDB = async () => {
  const result = await TransactionModel.find().populate('customer'); // Populate customer details;
  // console.log('service:', result);
  return result;
};

// Find specific customer by Id
const getTransactionByIdFromDB = async (id: string) => {
  // console.log('service:', id);
  const Transaction = await TransactionModel.findOne({ _id: id }); //findById(id) is optimized for _id lookups
  // console.log(Transaction);
  return Transaction;
};
// Create Transaction
// Function to get the next transaction sequence number
const getNextTransactionId = async () => {
  const counter = await TxCounterModel.findOneAndUpdate(
    { id: 'txCounter' },
    { $inc: { sequence: 1 } },
    { new: true, upsert: true }
  );

  return counter.sequence.toString().padStart(5, '0'); // Format as 5-digit (e.g., 00001)
};
const createTransactionIntoDB = async (Transaction: ITransaction) => {
  // Get the next transaction ID
  const transactionID = await getNextTransactionId();

  // Assign transaction ID
  Transaction.transactionID = `TX-${transactionID}`;
  // console.log('Services:', Transaction);
  // console.log(Transaction);
  const result = await TransactionModel.create(Transaction);
  return result;
};

// Update a Transaction
const updateTransactionByIdInDB = async (
  TransactionId: string,
  updatedData: Partial<ITransaction>
) => {
  const updatedTransaction = await TransactionModel.findByIdAndUpdate(
    TransactionId,
    { ...updatedData },
    { new: true, runValidators: true } // Return updated document and validate updates
  );

  return updatedTransaction;
};
// Delete a Transaction
const deleteTransactionByIdFromDB = async (TransactionId: string) => {
  const deletedTransaction = await TransactionModel.findByIdAndDelete(
    TransactionId
  );
  return deletedTransaction;
};

export const TransactionServices = {
  getAllTransactionsFromDB,
  getTransactionByIdFromDB,
  createTransactionIntoDB,
  updateTransactionByIdInDB,
  deleteTransactionByIdFromDB,
};
