import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { handleError } from "../../utils/handleError";
import { validateOrderData } from "./validate.OrderData";
import { OrderValidationSchema } from "./order.validation";

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
    const validaEmail = OrderValidationSchema.emailValidator.parse(email);
    const orders = await OrderService.getAllOrders(validaEmail);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
