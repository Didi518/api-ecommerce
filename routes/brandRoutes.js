const brandController = require('../controllers/brandController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, brandController.createBrand);
router.put('/:id', authMiddleware, isAdmin, brandController.updateBrand);
router.delete('/:id', authMiddleware, isAdmin, brandController.deleteBrand);
router.get('/:id', brandController.getBrand);
router.get('/', brandController.getAllBrands);

module.exports = router;
