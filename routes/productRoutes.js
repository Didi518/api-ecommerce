const productController = require('../controllers/productController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
  productImgResize,
  uploadPhoto,
} = require('../middlewares/uploadImages');
const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, productController.createProduct);
router.put(
  '/upload/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 2),
  productImgResize,
  productController.uploadImages
);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProducts);
router.put('/wishlist', authMiddleware, productController.addToWishList);
router.put('/rating', authMiddleware, productController.rating);
router.put('/:id', authMiddleware, isAdmin, productController.updateProduct);
router.delete('/:id', authMiddleware, isAdmin, productController.deleteProduct);

module.exports = router;
