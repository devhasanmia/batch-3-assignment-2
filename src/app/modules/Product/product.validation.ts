import { object, string, number, boolean, array } from "zod";

const InventoryValidation = object({
  quantity: number()
    .positive("Quantity must be positive")
    .nonnegative("Quantity cannot be negative"),
  inStock: boolean(),
});

const VariantValidation = object({
  type: string().min(1, { message: "Variant type cannot be empty" }),
  value: string().min(1, { message: "Variant value cannot be empty" }),
});

const ProductValidation = object({
  name: string().min(3, { message: "Name must be at least 3 characters." }),
  description: string().min(10, { message: "Description must be at least 10 characters." }),
  price: number()
    .positive("Price must be positive.")
    .min(0.01, { message: "Price must be greater than 0." }),
  category: string().min(1, { message: "Category cannot be empty." }),
  tags: array(string()).min(1, { message: "Please provide at least one tag." }),
  variants: array(VariantValidation).min(1, { message: "Please add at least one variant." }),
  inventory: InventoryValidation,
});

const UpdateProductValidation = object({
  name: string()
    .min(3, { message: "Name must be at least 3 character." })
    .optional(),
  description: string()
    .min(10, { message: "Description must be at least 10 character." })
    .optional(),
  price: number()
    .positive("Price must be positive.")
    .min(0.01, { message: "Price must be more than 0." })
    .optional(),
  category: string()
    .min(1, { message: "Category cannot be empty." })
    .optional(),
  tags: array(string()).optional(),
  variants: array(VariantValidation).optional(),
  inventory: InventoryValidation.optional(),
});



export const ProductValidationSchema = {
  create: ProductValidation,
  update: UpdateProductValidation,
};
