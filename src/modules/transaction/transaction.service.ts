import { ITransaction } from './transaction.interface';
import { TransactionModel } from './transaction.model';

// Find all Transactions
const getAllTransactionsFromDB = async () => {
  const result = await TransactionModel.find().populate("customer"); // Populate customer details;
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
const createTransactionIntoDB = async (Transaction: ITransaction) => {
  // console.log('Services:', Transaction);
  const result = await TransactionModel.create(Transaction);
  return result;
};
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
