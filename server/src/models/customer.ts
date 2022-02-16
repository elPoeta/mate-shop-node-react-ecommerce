import { model, Schema } from "mongoose";
import { CustomerType } from '@interfaces/customer';

const CustomerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  address: {
    type: [
      {
        country: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        street: {
          type: String,
          required: true
        },
        number: {
          type: Number,
          required: true
        },
        postalCode: {
          type: String,
          required: true
        },
      }
    ],
  }
},
  {
    timestamps: true,
  });

export default model<CustomerType>('Customer', CustomerSchema);