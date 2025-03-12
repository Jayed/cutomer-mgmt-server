import { ICustomer } from './customer.interface';
import { CustomerModel, CxCounterModel } from './customer.models';

// Function to get the next transaction sequence number
const getNextCxId = async () => {
  const counter = await CxCounterModel.findOneAndUpdate(
    { id: 'cxCounter' },
    { $inc: { sequence: 1 } },
    { new: true, upsert: true }
  );
  return counter.sequence.toString().padStart(2, '0'); // Format as 5-digit (e.g., 01)
};

// Create customer
const createCustomerIntoDB = async (Customer: ICustomer) => {
  // Get the next transaction ID
  const customerId = await getNextCxId();
  // Assign Cx ID
  Customer.customerId = `CX-${customerId}`;
  // console.log('Services:', Customer);
  const result = await CustomerModel.create(Customer);
  return result;
};

// Find all customers
const getAllCustomersFromDB = async () => {
  const result = await CustomerModel.find();
  // console.log('service:', result);
  return result;
};
// Find specific customer by Id
const getCustomerByIdFromDB = async (ObjectId: string) => {
  const Customer = await CustomerModel.findOne({ ObjectId });
  return Customer;
};

// Update a customer
const updateCustomerByIdInDB = async (
  CustomerId: string,
  updatedData: Partial<ICustomer>
) => {
  const updatedCustomer = await CustomerModel.findByIdAndUpdate(
    CustomerId,
    { ...updatedData },
    { new: true, runValidators: true } // Return updated document and validate updates
  );

  return updatedCustomer;
};

// Delete a customer
const deleteCustomerByIdFromDB = async (CustomerId: string) => {
  const deletedCustomer = await CustomerModel.findByIdAndDelete(CustomerId);
  return deletedCustomer;
};

export const CustomerServices = {
  getAllCustomersFromDB,
  getCustomerByIdFromDB,
  createCustomerIntoDB,
  updateCustomerByIdInDB,
  deleteCustomerByIdFromDB,
};
