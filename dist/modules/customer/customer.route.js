"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const routerCustomer = express_1.default.Router();
routerCustomer.get('/', customer_controller_1.CustomerControllers.getAllCustomers);
routerCustomer.get('/:ObjectId', customer_controller_1.CustomerControllers.getCustomerById);
routerCustomer.post('/create-customer', customer_controller_1.CustomerControllers.createCustomer);
routerCustomer.put('/:CustomerId', customer_controller_1.CustomerControllers.updateCustomerById);
routerCustomer.delete('/:CustomerId', customer_controller_1.CustomerControllers.deleteCustomerById);
exports.CustomerRoutes = routerCustomer;
