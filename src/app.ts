import express, { Request, Response } from "express";
import { ProductRouter } from "./app/modules/Product/product.route";
import { OrderRouter } from "./app/modules/Order/order.route";
const app = express();

app.use(express.json());
app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is up and running!",
  });
});

export default app;
