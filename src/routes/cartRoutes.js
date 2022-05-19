const router = require("express").Router();
const Cart = require('../controllers/cart');

router.post('/cart/add', Cart.addCartItem);
router.get('/cart', Cart.getCartItems);

module.exports = router;
