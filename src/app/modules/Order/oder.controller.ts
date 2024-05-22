import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { handleError } from "../../utils/handleError";
import { validateOrderData } from "./validate.OrderData";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const validateData = validateOrderData(orderData);
    const data = await OrderService.createOrder(validateData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: data,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const orders = await OrderService.getAllOrders(email);
    res.status(200).json(orders);
  } catch (error: any) {
    handleError(res, error);
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
