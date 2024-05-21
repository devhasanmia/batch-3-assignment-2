import express, { Request, Response } from "express";
import { ProductRouter } from "./app/modules/Product/product.route";
const app = express();




app.use(express.json());
app.use('/api/products', ProductRouter);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is up and running!",
  });
});


export default app;




