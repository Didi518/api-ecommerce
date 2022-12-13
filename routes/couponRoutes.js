const couponController = require('../controllers/couponController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, couponController.createCoupon);
router.get('/', authMiddleware, isAdmin, couponController.getAllCoupons);
router.put('/:id', authMiddleware, isAdmin, couponController.updateCoupon);
router.delete('/:id', authMiddleware, isAdmin, couponController.deleteCoupon);

module.exports = router;
