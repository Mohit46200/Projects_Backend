const express = require("express")
const router = express.Router()
const CheckoutData = require("../models/checkoutSchema")


router.post("/checkout",async (req,res) => {
    try {
        const {email,details,product_id} = req.body
        let checkout = await CheckoutData.create({
                email: email,
                details: details,
                cartdata: product_id
            }) 
        res.status(201).json({
                    message:"Success",                    
                })
    }
    catch(error){
         console.log("Error is ", error)
    }

})


module.exports = router