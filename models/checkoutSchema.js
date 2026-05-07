const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    email:{
        type:String
    },
    details:{
        name:String,
        address:String,
        phone:Number
    },
    cartdata:[Number]

  },
  { timestamps: true }
)

module.exports = mongoose.model("CheckoutData", checkoutSchema);