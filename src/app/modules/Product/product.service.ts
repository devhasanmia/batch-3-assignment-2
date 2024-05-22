import { TProduct, UpdateTProduct } from "./product.interface";
import Product from "./product.model";
import { catchError } from "../../utils/catchError";
import { idValidityCheck } from "../../utils/idValidityCheck";

const createProductIntoDB = async (validatedProductData: TProduct) => {
  try {
    const product = await Product.create(validatedProductData);
    return product;
  } catch (error: any) {
    catchError(error);
  }
};

const getAllProduct = async (searchTerm: string) => {
  try {
    const product = await Product.find({
      $or: [
        { name: new RegExp(searchTerm, "i") },
        { description: new RegExp(searchTerm, "i") },
        { category: new RegExp(searchTerm, "i") },
        { tags: new RegExp(searchTerm, "i") },
      ],
    });
    if (product.length === 0) {
      throw new Error(`No products found`);
    }
    return product;
  } catch (error) {
    catchError(error);
  }
};

const getProductById = async (productId: string) => {
  try {
    idValidityCheck(productId);
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product Not Found`);
    }
    return product;
  } catch (error: any) {
    catchError(error);
  }
};

const updateProductById = async (
  productId: string,
  updateValidateData: UpdateTProduct
) => {
  try {
    idValidityCheck(productId);
    const product = await Product.findByIdAndUpdate(
      productId,
      updateValidateData,
      {
        new: true,
      }
    );
    if (!product) {
      throw new Error(`Product Not Found`);
    }
    return product;
  } catch (error: any) {
    catchError(error);
  }
};

const deleteProductById = async (productId: string) => {
  try {
    idValidityCheck(productId);
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      throw new Error(`Product Not Found`);
    }
    return null;
  } catch (error: any) {
    catchError(error)
  }
};

export const ProductService = {
  createProductIntoDB,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
