import { NextFunction } from "express";
import User from '../models/user';
import bcrypt from 'bcryptjs';

const userAdd = (req : any, res : any, next : NextFunction) => {
    //Start 
    User.find({ email: req.body.email })
    .then(user => {
      if (user.length >= 1) {
        return res.status(418).json({
          message: "User already exists you teapot!"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(req.body.password);
            return res.status(418).json({
              error: err 
            });
          } else {
            const user = new User({
              email: req.body.email,
              password: hash,
              role: "admin"
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
    //End
};

export default {userAdd};