const PRODUCT = require('../model/product')

exports.AddProduct  = async function (req, res, next) {
    try {
        if (!req.body.title || !req.body.discription || !req.body.price || !req.body.discountPercentage || !req.body.rating || !req.body.stock || !req.body.brand || !req.body.category || !req.body.thumbnail || !req.body.images) {
            throw new Error("Please Enter Valid Field")
        }
        const data = await PRODUCT.create(req.body)
        res.status(201).json({
            message: "Product Created",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

exports.GetProducts = async function (req, res, next) {
    try {
        const data = await PRODUCT.find().populate('category')
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

exports.DeleteProduct = async function (req, res, next) {
    try {
        console.log(req.query.id)
        await PRODUCT.findByIdAndDelete(req.query.id)
        res.status(201).json({
            message: "Data Delete Successfully",
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })  
    }
}

exports.UpdateProduct = async function (req, res, next) {
    try {

        await PRODUCT.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({
            message: "Data Update Successful"
        })


    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}