"use strict";
// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CxCounterModel = exports.CustomerModel = void 0;
const mongoose_1 = require("mongoose");
const CustomerSchema = new mongoose_1.Schema({
    customerId: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: [true, 'Name Field required.'],
        trim: true,
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email number is required.'],
    },
    address: { type: String, required: [true, 'Address is required.'] },
}, { timestamps: true });
const CxCounterSchema = new mongoose_1.Schema({
    id: { type: String, required: true }, // Fixed "_id": "cxCounter"
    sequence: { type: Number, required: true },
});
// Export the Customer models
exports.CustomerModel = (0, mongoose_1.model)('Customer', CustomerSchema);
exports.CxCounterModel = (0, mongoose_1.model)('CxCounter', CxCounterSchema);
