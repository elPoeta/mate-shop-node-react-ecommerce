import { model, Schema } from "mongoose";
import { CustomerI } from '@interfaces/customer';

const CustomerSchema = new Schema<CustomerI>({
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

export default model<CustomerI>('Customer', CustomerSchema);