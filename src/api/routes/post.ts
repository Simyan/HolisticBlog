import express from 'express';
const router = express.Router();

//const userController = require('../controllers/user');
import postController from '../controllers/post';
import authenticate from '../middleware/authenticate';

router.post("/postAdd", authenticate.authenticateUser, postController.postAdd);
router.get("/postList", authenticate.authenticateUser, postController.postList);
export default router;