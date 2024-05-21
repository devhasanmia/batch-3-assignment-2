import { NextFunction, Request, Response } from "express";
import Product from "../Product/product.model";

const inStockCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.find();
  products.map(async (product) => {
    if (product.inventory.quantity === 0) {
      await Product.findByIdAndUpdate(product._id, {
        $set: {
          "inventory.inStock": false,
        },
      });
    }
  });

  next();
};


export default inStockCheck;