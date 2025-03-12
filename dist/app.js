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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customer_route_1 = require("./modules/customer/customer.route");
const transaction_route_1 = require("./modules/transaction/transaction.route");
const globalErrorhandler_1 = __importDefault(require("./app/middlewares/globalErrorhandler"));
// import cors from 'cors';
const app = (0, express_1.default)();
//parser (Middleware)
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Root route
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Root directory");
    res.status(200).json({
        message: 'Hi, Welcome to customerMgmt API Service!',
        success: true,
    });
}));
// application routes
app.use('/api/v1/customers', customer_route_1.CustomerRoutes);
app.use('/api/v1/transactions', transaction_route_1.TransactionRoutes);
// app.use('/api/v1/orders', OrderRoutes);
// console.log("app.ts");
app.use(globalErrorhandler_1.default);
exports.default = app;
