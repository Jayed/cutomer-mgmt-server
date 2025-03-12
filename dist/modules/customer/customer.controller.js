"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerControllers = void 0;
const customer_service_1 = require("./customer.service");
// Create new customer
const createCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const CustomerData = req.body;
        // console.log("CustomerData: ", CustomerData);
        // will call service func to send this data
        const result = yield customer_service_1.CustomerServices.createCustomerIntoDB(CustomerData);
        // send response
        res.status(200).json({
            success: true,
            message: 'Customer is created successfully.',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllCustomers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.CustomerServices.getAllCustomersFromDB();
        // console.log("controller: ",result);
        // console.log("controller:", result);
        // send response
        res.status(200).json({
            success: true,
            message: 'Customers are retrieved successfully.',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get specific customer by Id
const getCustomerById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Correct param extraction
        const customer = yield customer_service_1.CustomerServices.getCustomerByIdFromDB(id);
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
    }
    catch (error) {
        next(error);
    }
});
// Update a customer
const updateCustomerById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CustomerId } = req.params;
        const updatedData = req.body;
        // Call service
        const updatedCustomer = yield customer_service_1.CustomerServices.updateCustomerByIdInDB(CustomerId, updatedData);
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
    }
    catch (error) {
        next(error);
    }
});
// Delete a customer
const deleteCustomerById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CustomerId } = req.params;
        const deletedCustomer = yield customer_service_1.CustomerServices.deleteCustomerByIdFromDB(CustomerId);
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
    }
    catch (error) {
        next(error);
    }
});
exports.CustomerControllers = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomerById,
    deleteCustomerById,
};
