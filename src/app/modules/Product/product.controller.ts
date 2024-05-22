import { Request, Response } from "express";
import { ProductService } from "./product.service";
import {
  validateProductData,
  validateUpdatedData,
} from "./validateProductData";
import { handleError } from "../../utils/handleError";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validatedProductData = validateProductData(productData);
    const createdProduct = await ProductService.createProductIntoDB(
      validatedProductData
    );
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: createdProduct,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.searchTerm as string;
    const products = await ProductService.getAllProduct(searchQuery);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const product = await ProductService.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: product,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const newData = req.body;
    const updateValidateData = validateUpdatedData(newData);
    const product = await ProductService.updateProductById(
      productId,
      updateValidateData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const product = await ProductService.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: product,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
