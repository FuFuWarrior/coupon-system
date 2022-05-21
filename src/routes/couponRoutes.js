const router = require('express').Router();
const Coupon = require('../controllers/coupon');

router.post('/coupon/add', Coupon.addCouponCode);
router.post('/coupon/check', Coupon.checkCouponCode);

module.exports = router;