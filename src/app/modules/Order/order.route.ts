import express from "express";
import { OrderController } from "./oder.controller";
import inStockCheck from "./order.middleware";
const router = express.Router();

router.post("/", inStockCheck, OrderController.createOrder);
router.get("/", inStockCheck, OrderController.getAllOrders);

export const OrderRouter = router;
