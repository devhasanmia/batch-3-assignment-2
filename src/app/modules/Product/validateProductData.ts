import { ProductValidationSchema } from "./product.validation";

export const validateProductData = (data: any) => {
  return ProductValidationSchema.create.parse(data);
};
export const validateUpdatedData = (data: any) => {
  return ProductValidationSchema.update.parse(data);
};
