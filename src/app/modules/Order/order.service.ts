import Product from "../Product/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";
import { idValidityCheck } from "../../utils/idValidityCheck";
import { catchError } from "../../utils/catchError";
import { OrderValidationSchema } from "./order.validation";
import { handleError } from "../../utils/handleError";
import { z } from "zod";

const createOrder = async (orderData: TOrder) => {
  try {
    idValidityCheck(orderData.productId);
    const product = await Product.findById(orderData.productId);
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
    catchError(error)
  }
};

const getAllOrders = async (email?: string) => {
  try {
    let orders;
    if (email) {
      orders = await Order.find({ email });
      if (orders.length === 0) {
        throw new Error(`Order not found`);
      }
    } else {
      orders = await Order.find();
    }
    return orders;
  } catch (error: any) {
    catchError(error)
  }
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
