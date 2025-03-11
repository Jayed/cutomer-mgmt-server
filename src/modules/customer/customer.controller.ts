import { NextFunction, Request, Response } from 'express';
import { CustomerServices } from './customer.service';

// Create new customer
const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const CustomerData = req.body;
    // console.log("CustomerData: ", CustomerData);
    // will call service func to send this data
    const result = await CustomerServices.createCustomerIntoDB(CustomerData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Customer is created successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CustomerServices.getAllCustomersFromDB();
    // console.log("controller: ",result);
    // console.log("controller:", result);
    // send response
    res.status(200).json({
      success: true,
      message: 'Customers are retrieved successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get specific customer by Id
const getCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params; // Correct param extraction
    const customer = await CustomerServices.getCustomerByIdFromDB(id);

    if (!customer) {
      res.status(404).json({
        success: false,
        message: 'Customer not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Customer retrieved successfully',
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

// Update a customer
const updateCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { CustomerId } = req.params;
    const updatedData = req.body;

    // Call service
    const updatedCustomer = await CustomerServices.updateCustomerByIdInDB(
      CustomerId,
      updatedData
    );

    if (!updatedCustomer) {
       res.status(404).json({
        message: 'Customer not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Customer updated successfully',
      status: true,
      data: updatedCustomer,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a customer
const deleteCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { CustomerId } = req.params;
    const deletedCustomer = await CustomerServices.deleteCustomerByIdFromDB(
      CustomerId
    );

    if (!deletedCustomer) {
       res.status(404).json({
        message: 'Customer not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Customer deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const CustomerControllers = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
};
