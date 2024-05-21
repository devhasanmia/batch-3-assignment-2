import { Request, Response } from "express";
import { OrderValidationSchema } from "./order.validation";
import { OrderService } from "./order.service";
import { z } from "zod";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const validateData = OrderValidationSchema.create.parse(order);

    const data = await OrderService.createOrder(validateData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const orders = await OrderService.getAllOrders(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
