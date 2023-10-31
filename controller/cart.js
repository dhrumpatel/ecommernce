const CART = require('../model/cart')

exports.AddCart  = async function (req, res, next) {
    try {
        if (!req.body.category) {
            throw new Error("Please Enter Valid Field")
        }
        const data = await CART.create(req.body)
        res.status(201).json({
            message: "Add to Cart",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

exports.GetCart = async function (req, res, next) {
    try {
        const data = await CART.find(req.query.id).populate('category')
        res.status(201).json({
            message: "All Record Find Successfully",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

exports.DeleteCart = async function (req, res, next) {
    try {
        console.log(req.query.id)
        await CART.findByIdAndDelete(req.query.id)
        res.status(201).json({
            message: "Data Delete Successfully",
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })  
    }
}

exports.UpdateCart = async function (req, res, next) {
    try {

        await CART.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({
            message: "Data Update Successful"
        })


    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}