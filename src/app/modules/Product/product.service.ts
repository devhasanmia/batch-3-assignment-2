import mongoose from "mongoose";
import { TProduct, UpdateTProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDB = async (data: TProduct) => {
  const product = await Product.create(data);
  return product;
};

const getAllProducts = async (searchTerm: string) => {
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } }
      ]
    }).exec();
    return products;
  } catch (error: any) {
    throw new Error(`${error.message || error.toString()}`);
  }
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

const getProductByIdAndUpdate = async (
  productId: string,
  data: UpdateTProduct
) => {
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

const deleteProductById = async (productId: string) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new Error(`Invalid product ID`);
    }
    const product = await Product.findByIdAndDelete(productId);
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
  getAllProducts,
  getProductById,
  getProductByIdAndUpdate,
  deleteProductById,
};
