// 1. Create an interface representing a document in MongoDB.

export type ICustomer = {
  customerId: string;
  name: string;
  mobile: string;
  email: string;
  address: string;
};

// Customer counter schema
export type ICxCounter = {
  id: string; // Fixed "_id": "cxCounter"
  sequence: number;
};


