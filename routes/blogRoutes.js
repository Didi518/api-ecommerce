const blogController = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, blogController.createBlog);
router.put('/likes', authMiddleware, blogController.likeBlog);
router.put('/dislikes', authMiddleware, blogController.dislikeBlog);
router.put('/:id', authMiddleware, isAdmin, blogController.updateBlog);
router.get('/:id', blogController.getBlog);
router.get('/', blogController.getAllBlogs);
router.delete('/:id', authMiddleware, isAdmin, blogController.deleteBlog);

module.exports = router;
