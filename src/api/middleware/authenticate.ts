import { NextFunction } from "express";
import jwt from 'jsonwebtoken';
require('dotenv').config();

const authenticateUser = (req : any, res: any, next: NextFunction) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "fJs88TS");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'User is not authenticated'
        });
    }
};

export default {authenticateUser};