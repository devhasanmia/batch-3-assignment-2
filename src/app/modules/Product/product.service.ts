import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDB = async (data: TProduct) => {
  const product = await Product.create(data);
  return product;
};

const getAllProduct = async () => {
  const product = await Product.find();
  return product;
};

const getProductById = async (productId: string)=> {
  const product = await Product.findById(productId);
  return product
}


export const ProductService = {
  createProductIntoDB,
  getAllProduct,
  getProductById
};
