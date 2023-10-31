const WISHLIST = require('../model/wishlist')

exports.AddWishlist  = async function (req, res, next) {
    try {
        if (!req.body.category) {
            throw new Error("Please Enter Valid Field")
        }
        const data = await WISHLIST.create(req.body)
        res.status(201).json({
            message: "Added to Whislist",
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

exports.GetWishlist = async function (req, res, next) {
    try {
        const data = await WISHLIST.find(req.query.id).populate(['user', 'product'])
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

exports.DeleteWishlist = async function (req, res, next) {
    try {
        console.log(req.query.id)
        await WISHLIST.findByIdAndDelete(req.query.id)
        res.status(201).json({
            message: "Data Delete Successfully",
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })  
    }
}

exports.UpdateWishlist = async function (req, res, next) {
    try {

        await WISHLIST.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({
            message: "Data Update Successful"
        })


    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}