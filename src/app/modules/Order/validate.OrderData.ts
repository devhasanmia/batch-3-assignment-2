import { OrderValidationSchema } from "./order.validation";

export const validateOrderData = (data: any) => {
    const validateData = OrderValidationSchema.create.parse(data);
    return validateData;
  };