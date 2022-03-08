import { model, Schema } from "mongoose";
import { ProductI } from '@interfaces/product';
import { ReviewI } from "@interfaces/review";

const reviewSchema: Schema = new Schema<ReviewI>(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const ProductSchema: Schema = new Schema<ProductI>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alternateImages: [],
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      max: 5,
      min: 0,
      default: 0,
    },
    reviews: [reviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    specifications: {
      flavor: {
        type: String
      },
      weight: {
        type: Number
      },
      unit: {
        type: String
      }
    }
  },
  {
    timestamps: true,
  }
);

export default model<ProductI>('Product', ProductSchema);

