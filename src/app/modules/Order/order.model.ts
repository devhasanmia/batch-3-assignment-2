import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import Product from "../Product/product.model";

const orderSchema = new Schema <TOrder>({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
orderSchema.post("save", async function(doc, next) {
    try {
        const product = await Product.findById(doc.productId);
        if (product?.inventory?.quantity === doc.quantity) {
            await Product.findByIdAndUpdate(doc.productId, {
                $set: { "inventory.inStock": false }
            });
        }
        next();
    } catch (error:any) {
        next(error);
    }
});



const Order = model<TOrder>("Order", orderSchema);

export default Order;