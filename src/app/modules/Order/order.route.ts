import express from "express";
import { OrderController } from "./oder.controller";
const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);

export const OrderRouter = router;
