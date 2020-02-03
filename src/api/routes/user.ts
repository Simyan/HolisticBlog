import express from 'express';
const router = express.Router();

//const userController = require('../controllers/user');
import userController from '../controllers/user';

router.post("/signup", userController.userAdd);
router.post("/signin", userController.userLogin);
router.post('/xyz', (req, res, next) => {
    res.status(201).json({
        message: 'test'
    });
});

export default router;