import mongoose from "mongoose";

//how mongoose create model and import model ->

//to create schema
//in username there is an object which defines the properties of username like if we want unique username so just make unique : true then no duplicate username will be taken in database
//in second object add timestamps : true which add two fields automatically which is createdAt and updatedAt
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requierd: true, // need to be filled
      unique: true, // uniqueness must present
      lowercase: true, // just like instagram app
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//exporting schema
export const User = mongoose.model("User", userSchema);
//model("kya name ka banau" , kis schema ke based par model banau)
// ye User jo name diya h wo database ke andar jake plural and small letters me badal jata hai like users ho jata hai
