import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { z } from "zod";
import { ProductValidationSchema } from "./product.validation";
const createProduct = async (req: Request, res: Response) => {
  try {
    const products = req.body;
    const validateData = ProductValidationSchema.create.parse(products);
    const data = await ProductService.createProductIntoDB(validateData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: data,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: error.errors[0].message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllProduct();

    if (products.length <= 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const validateData = ProductValidationSchema.update.parse(data);
    const product = await ProductService.getProductByIdAndUpdate(
      productId,
      validateData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: error.errors[0].message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "sdfs",
      });
    }
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductService.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
};
