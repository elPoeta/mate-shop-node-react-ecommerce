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
        street: {
          type: String,
          minlength: 5,
          maxlength: 255,
          required: true
        },
        number: {
          type: Number,
          min: 0,
          required: true
        },
        location: {
          type: String,
          minlength: 5,
          maxlength: 255,
          required: true
        }
      }
    ],
  }
});

export default model<CustomerType>('Customer', CustomerSchema);