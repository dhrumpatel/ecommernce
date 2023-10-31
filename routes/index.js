var express = require('express');
var router = express.Router();
const multer  = require('multer')

const userController = require('../controller/user')
const selleruserController = require('../controller/selleruser')
const adminuserController = require('../controller/adminuser');
const categoryController = require('../controller/category');
const productController = require('../controller/product');
const wishlistController = require('../controller/wishlist');
const cartController = require('../controller/cart');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET home page. */

//-----------USER UserData-----------//
router.post('/usersignup', userController.usersignup);

router.post('/userlogin', userController.userlogin);

//-----------Seller UserData-----------//
router.post('/sellersignup', selleruserController.sellersignup);

router.post('/sellerlogin', selleruserController.sellerlogin);

//-----------Admin UserData-----------//
router.post('/adminsignup', adminuserController.adminsignup);

router.post('/adminlogin', adminuserController.adminlogin);

//-----------Category Data-----------//
// adminuserController.SECURE, 
router.post('/category', upload.single('image'), categoryController.AddCategory);

router.get('/categories', categoryController.GetCategories);

router.delete('/category', categoryController.DeleteCategory);

router.put('/category', categoryController.UpdateCategory);


//-----------Product Data-----------//

router.post('/product', selleruserController.SECURE, productController.AddProduct);

router.get('/products', productController.GetProducts);

router.delete('/product', productController.DeleteProduct);

router.put('/product', productController.UpdateProduct);

//-----------Wishlist Data-----------//

router.post('/wishlist', userController.SECURE, wishlistController.AddWishlist);

router.get('/wishlists', wishlistController.GetWishlist);

router.delete('/wishlist', wishlistController.DeleteWishlist);

router.put('/wishlist', wishlistController.UpdateWishlist);

//-----------Cart Data-----------//

router.post('/cart', userController.SECURE, cartController.AddCart);

router.get('/carts', cartController.GetCart);

router.delete('/cart', cartController.DeleteCart);

router.put('/cart', cartController.UpdateCart);


module.exports = router;
