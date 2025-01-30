import mongoose from "mongoose";

//for orderItems we create a schema here because har ke ordered item ka quantity and product id store krna hai 
const orderItemSchema = new mongoose.Schema({
    productId : {
        //ye refernce hoga from the Product schema
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
    },
    quantity : {
        type : Number,
        required : true,
    },
})

const orderSchema = new mongoose.Schema({

    orderPrice : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    orderItems : {
        type : [orderItemSchema],
    },
    address : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ["PENDING" , "CANCELLED" , "DELIVERED"],
        default : "PENDING",
    },

} , {timestamps:true});

export const Order = mongoose.model("Order" , orderSchema);