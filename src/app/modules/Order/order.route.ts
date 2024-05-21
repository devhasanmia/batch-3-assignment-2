import express from "express";
import { OrderController } from "./oder.controller";
const router = express.Router();

router.post("/", OrderController.createOrder);


export const OrderRouter = router;
