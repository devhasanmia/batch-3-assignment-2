import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const product = await ProductService.createProductIntoDB(data);
  res.status(201).json({
    success: true,
    message: "Product created successfully!",
    data: product,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllProduct();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
    console.log(error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const product = await ProductService.getProductById(productId);
  res.status(200).json({
    success: true,
    message: "Product fetched successfully!",
    data: product,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
};
