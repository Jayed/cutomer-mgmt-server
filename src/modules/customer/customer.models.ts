// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.

import { Schema, model } from 'mongoose';
import { ICustomer, ICxCounter } from './customer.interface';

const CustomerSchema = new Schema<ICustomer>(
  {
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
  },
  { timestamps: true }
);

const CxCounterSchema = new Schema<ICxCounter>({
  id: { type: String, required: true }, // Fixed "_id": "cxCounter"
  sequence: { type: Number, required: true },
});

// Export the Customer models
export const CustomerModel = model<ICustomer>('Customer', CustomerSchema);

export const CxCounterModel = model<ICxCounter>('CxCounter', CxCounterSchema);
