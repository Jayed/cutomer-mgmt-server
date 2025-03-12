"use strict";
// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
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
    address: { type: String, required: [true, 'Address is required.'] },
}, { timestamps: true });
// Export the Product model
exports.CustomerModel = (0, mongoose_1.model)('Customer', CustomerSchema);
