import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const variantsSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    default: [],
  },
  variants: {
    type: [variantsSchema],
    required: true,
    default: [],
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});


const Product = model<TProduct>("Product", productSchema);

export default Product;
