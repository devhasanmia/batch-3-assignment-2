import mongoose from "mongoose";
import { TProduct, UpdateTProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDB = async (data: TProduct) => {

  const product = await Product.create(data);
  return product;
};

const getAllProduct = async () => {
  const product = await Product.find();
  return product;
};

const getProductById = async (productId: string) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new Error(`Invalid product ID`);
    }
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product Not Found`);
    }
    return product;
  } catch (error: any) {
    throw new Error(`${error.message || error.toString()}`);
  }
};

const getProductByIdAndUpdate = async (productId: string, data: UpdateTProduct) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new Error(`Invalid product ID`);
    }
    const product = await Product.findByIdAndUpdate(productId, data, {
      new: true,
    });
    if (!product) {
      throw new Error(`Product Not Found`);
    }
    return product;
  } catch (error: any) {
    throw new Error(`${error.message || error.toString()}`);
  }
};

export const ProductService = {
  createProductIntoDB,
  getAllProduct,
  getProductById,
  getProductByIdAndUpdate,
};
