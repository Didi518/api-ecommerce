const blogCategoryController = require('../controllers/blogCategoryController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post(
  '/',
  authMiddleware,
  isAdmin,
  blogCategoryController.createCategory
);
router.put(
  '/:id',
  authMiddleware,
  isAdmin,
  blogCategoryController.updateCategory
);
router.delete(
  '/:id',
  authMiddleware,
  isAdmin,
  blogCategoryController.deleteCategory
);
router.get('/:id', blogCategoryController.getCategory);
router.get('/', blogCategoryController.getAllCategories);

module.exports = router;
