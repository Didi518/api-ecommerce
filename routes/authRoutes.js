const { Router } = require('express');
const userController = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post('/register', userController.createUser);
router.post('/forgot-password-token', userController.forgotPasswordToken);
router.put('/reset-password/:token', userController.resetPassword);
router.put('/password', authMiddleware, userController.updatePassword);
router.post('/login', userController.loginUser);
router.post('/admin-login', userController.loginAdmin);
router.post('/cart/apply', authMiddleware, userController.applyCoupon);
router.post('/cart', authMiddleware, userController.addToCart);
router.get('/get-all-users', userController.getAllUsers);
router.get('/refresh', userController.handleRefreshToken);
router.get('/logout', userController.logout);
router.get('/wishlist', authMiddleware, userController.getWishlist);
router.get('/cart', authMiddleware, userController.getUserCart);
router.get('/:id', authMiddleware, isAdmin, userController.getUser);
router.delete('/empty-cart', authMiddleware, userController.emptyCart);
router.delete('/:id', userController.deleteUser);
router.put('/edit-user', authMiddleware, userController.updateUser);
router.put('/save-address', authMiddleware, userController.saveAddress);
router.put(
  '/block-user/:id',
  authMiddleware,
  isAdmin,
  userController.blockUser
);
router.put(
  '/unblock-user/:id',
  authMiddleware,
  isAdmin,
  userController.unblockUser
);

module.exports = router;
