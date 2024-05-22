import express, { Request, Response } from "express";
import { ProductRouter } from "./app/modules/Product/product.route";
import { OrderRouter } from "./app/modules/Order/order.route";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is up and running!",
  });
});
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
