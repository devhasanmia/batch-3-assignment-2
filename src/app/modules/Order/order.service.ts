import mongoose from "mongoose";
import Product from "../Product/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (orderData: TOrder) => {
  try {
    const product = await Product.findById(orderData.productId);
    if (!mongoose.Types.ObjectId.isValid(orderData.productId)) {
      throw new Error(`Invalid product ID`);
    }
    if (!product) {
      throw new Error(`Product not found`);
    }
    if (product.inventory.quantity < orderData.quantity) {
      throw new Error(`Insufficient quantity available in inventory`);
    }
    const order = await Order.create(orderData);
    await Product.findByIdAndUpdate(orderData.productId, {
      $inc: {
        "inventory.quantity": -orderData.quantity,
      },
    });
    return order;
  } catch (error: any) {
    throw new Error(`${error.message || error.toString()}`);
  }
};

export const OrderService = {
  createOrder,
};
