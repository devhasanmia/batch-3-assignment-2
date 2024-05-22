import { object, string, number } from "zod";


const emailValidation = string().email({ message: "Email must be a valid email address" });

const orderValidation = object({
    email: emailValidation,
    productId: string(),
    price: number().positive("Price must be a positive number"),
    quantity: number().positive("Quantity must be a positive number")
});



export const OrderValidationSchema = {
    create: orderValidation,
    emailValidator: emailValidation
};