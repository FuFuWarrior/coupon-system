const router = require('express').Router();
const Coupon = require('../controllers/coupon');

router.post('/coupon/add', Coupon.addCouponCode);
router.post('/coupon/', Coupon.checkCouponCode);

module.exports = router;