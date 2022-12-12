const productController = require('../controllers/productController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, productController.createProduct);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProducts);
router.put('/:id', authMiddleware, isAdmin, productController.updateProduct);
router.delete('/:id', authMiddleware, isAdmin, productController.deleteProduct);

module.exports = router;
