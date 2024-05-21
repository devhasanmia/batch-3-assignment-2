import { object, string, number, boolean, array } from "zod";

const InventoryValidation = object({
  quantity: number()
    .positive("Quantity must be a positive number")
    .nonnegative("Quantity must not be negative"),
  inStock: boolean(),
});

const VariantValidation = object({
  type: string().min(1, { message: "Variant type must not be empty" }),
  value: string().min(1, { message: "Variant value must not be empty" }),
});

const ProductValidation = object({
  name: string().min(3, { message: "Name must be at least 3 characters long" }),
  description: string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
  price: number()
    .positive("Price must be a positive number")
    .min(0.01, { message: "Price must be greater than 0" }),
  category: string().min(1, { message: "Category must not be empty" }),
  tags: array(string().min(1, { message: "Tags must not be empty" })),
  variants: array(VariantValidation).min(1, {message: "Variants must not be empty" }),
  inventory: InventoryValidation,
});

const UpdateProductValidation = object({
  name: string().min(3, { message: "Name must be at least 3 characters long" }).optional(),
  description: string().min(10, {
    message: "Description must be at least 10 characters long",
  }).optional(),
  price: number()
   .positive("Price must be a positive number")
   .min(0.01, { message: "Price must be greater than 0" }).optional(),
  category: string().min(1, { message: "Category must not be empty" }).optional(),
  tags: array(string()).optional(),
  variants: array(VariantValidation).optional(),
  inventory: InventoryValidation.optional(),
})


export const ProductValidationSchema = {
  create: ProductValidation,
  update: UpdateProductValidation,
};
