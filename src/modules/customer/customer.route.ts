import express from 'express';
import { CustomerControllers } from './customer.controller';

const routerCustomer = express.Router();

routerCustomer.get('/', CustomerControllers.getAllCustomers);

routerCustomer.get('/:ObjectId', CustomerControllers.getCustomerById);

routerCustomer.post('/create-customer', CustomerControllers.createCustomer);

routerCustomer.put('/:CustomerId', CustomerControllers.updateCustomerById);

routerCustomer.delete('/:CustomerId', CustomerControllers.deleteCustomerById);

export const CustomerRoutes = routerCustomer;
