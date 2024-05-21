import { object, string, number, boolean, array } from "zod";



const orderValidation = object({
    email: string().email({ message: "Email must be a valid email address" }),
    productId: string(),
    price: number().positive("Price must be a positive number"),
    quantity: number().positive("Quantity must be a positive number")
});

export const OrderValidationSchema = {
    create: orderValidation,
};