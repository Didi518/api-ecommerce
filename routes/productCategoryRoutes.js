const productCategoryController = require('../controllers/productCategoryController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post(
  '/',
  authMiddleware,
  isAdmin,
  productCategoryController.createCategory
);
router.put(
  '/:id',
  authMiddleware,
  isAdmin,
  productCategoryController.updateCategory
);
router.delete(
  '/:id',
  authMiddleware,
  isAdmin,
  productCategoryController.deleteCategory
);
router.get('/:id', productCategoryController.getCategory);
router.get('/', productCategoryController.getAllCategories);

module.exports = router;
