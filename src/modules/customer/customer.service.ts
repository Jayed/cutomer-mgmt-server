import { ICustomer } from './customer.interface';
import { CustomerModel } from './customer.models';

// Create customer
const createCustomerIntoDB = async (Customer: ICustomer) => {
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
